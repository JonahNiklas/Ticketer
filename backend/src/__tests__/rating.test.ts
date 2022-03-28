import { Context, createMockContext, MockContext } from '../context';
import { calculateUserRatingHelper, createRatingBothWaysHelper, getUserRatingsHelper, rateUserHelper } from '../handlers/helpers/ratingHelper';
import { RestResponse, RestResponseWithData } from '../types';

let mockCtx: MockContext;
let context: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  context = mockCtx as unknown as Context;
});

describe('test create rating', () => {
  it('valid createRatingBothWays', async () => {
    const user1 = {
      id: 5000,
      firstName: 'Hello',
      lastName: 'World',
      email: 'hello@world.com',
      password: 'HelloWorld!',
    };
    const user2 = {
      id: 5001,
      firstName: 'Hello',
      lastName: 'World',
      email: 'hello2@world.com',
      password: 'HelloWorld!',
    };

    mockCtx.prisma.user.create.mockResolvedValue(user1);
    mockCtx.prisma.user.create.mockResolvedValue(user2);

    createRatingBothWaysHelper(context, { postTitle: 'test title', givenById: user1.id, gottenById: user2.id }).then((message: RestResponse) => {
      expect(message.code).toBe(200);
      expect(message.message).toBe('Successfully created Rating!');
    }).catch((error: any) => console.log(error));
  });

  it('not valid - invalid input; createRatingBothWays', async () => {
    const user1 = {
      id: 5000,
      firstName: 'Hello',
      lastName: 'World',
      email: 'hello@world.com',
      password: 'HelloWorld!',
    };
    const user2 = {
      id: 5001,
      firstName: 'Hello',
      lastName: 'World',
      email: 'hello2@world.com',
      password: 'HelloWorld!',
    };

    mockCtx.prisma.rating.create.mockRejectedValue(new Error('yeet'));

    createRatingBothWaysHelper(context, { postTitle: 'test title', givenById: user1.id, gottenById: user2.id }).then((message: RestResponse) => {
      expect(message.code).toBe(400);
      expect(message.message).toMatch(/Something went wrong/);
    }).catch((error: any) => console.log(error));
  });

  it('not valid - rating itself; createRatingBothWays', async () => {
    const user1 = {
      id: 5000,
      firstName: 'Hello',
      lastName: 'World',
      email: 'hello@world.com',
      password: 'HelloWorld!',
    };
    const user2 = {
      id: 5001,
      firstName: 'Hello',
      lastName: 'World',
      email: 'hello2@world.com',
      password: 'HelloWorld!',
    };

    const rating = {
      id: 1000,
      rating: 0,
      description: 'test title',
      givenById: 5000,
      gottenById: 5001,
      createdAt: new Date(),
      active: true,
    };

    mockCtx.prisma.user.create.mockResolvedValue(user1);
    mockCtx.prisma.user.create.mockResolvedValue(user2);
    mockCtx.prisma.rating.update.mockResolvedValue(rating);

    createRatingBothWaysHelper(context, { postTitle: 'test title', givenById: user1.id, gottenById: user1.id }).then((message: RestResponse) => {
      expect(message.code).toBe(400);
      expect(message.message).toBe('Cannot rate itself');
    }).catch((error: any) => console.log(error));
  });
});

describe('test rate user', () => {
  it('valid rating', async () => {
    const rating = {
      id: 1000,
      rating: 0,
      description: 'test title',
      givenById: 5000,
      gottenById: 5001,
      createdAt: new Date(),
      active: true,
    };

    mockCtx.prisma.rating.update.mockResolvedValue(rating);
    rateUserHelper(context, { id: rating.id, rating: 5, description: 'super great!' }).then((message: RestResponse) => {
      expect(message.code).toBe(200);
      expect(message.message).toBe('Successfully created Rating!');
    }).catch((error: any) => console.log(error));
  });

  it('not valid - invalid id; rate user', async () => {
    mockCtx.prisma.rating.update.mockRejectedValue(new Error('yeet'));

    rateUserHelper(context, { id: 9000, rating: 5, description: 'super great!' }).then((message: RestResponse) => {
      expect(message.code).toBe(400);
      expect(message.message).toMatch(/Something went wrong/);
    }).catch((error: any) => console.log(error));
  });

  it('not valid - invalid rating; rate user', async () => {
    mockCtx.prisma.rating.update.mockRejectedValue(new Error('yeet'));

    rateUserHelper(context, { id: 100, rating: 10000, description: 'super great!' }).then((message: RestResponse) => {
      expect(message.code).toBe(400);
      expect(message.message).toBe('Rating has to be between 1 and 5');
    }).catch((error: any) => console.log(error));

    rateUserHelper(context, { id: 100, rating: -10000, description: 'super great!' }).then((message: RestResponse) => {
      expect(message.code).toBe(400);
      expect(message.message).toBe('Rating has to be between 1 and 5');
    }).catch((error: any) => console.log(error));
  });
});

describe('test get user rating', () => {
  it('valid get user rating', async () => {
    const rating = {
      id: 1000,
      rating: 4,
      description: 'test title',
      givenById: 5000,
      gottenById: 5001,
      createdAt: new Date(),
      active: true,
    };
    mockCtx.prisma.rating.findMany.mockResolvedValue([rating]);

    getUserRatingsHelper(context, 5001).then((message: RestResponseWithData) => {
      expect(message.code).toBe(200);
      expect(message.message).toBe(`Successfully got all ratings for user:${5001}`);
      expect(message.data).toBeDefined();
      expect(message.data).toContain(rating);
    }).catch((error: any) => console.log(error));
  });

  it('invalid get user rating', async () => {
    mockCtx.prisma.rating.findMany.mockRejectedValue(new Error('yeet'));
    getUserRatingsHelper(context, 5001).then((message: RestResponseWithData) => {
      expect(message.code).toBe(400);
      expect(message.message).toMatch(/Something went wrong/);
      expect(message.data).toBeDefined();
      expect(message.data).toBe(null);
    }).catch((error: any) => console.log(error));
  });
});

describe('test calculate user rating', () => {
  it('valid rating', async () => {
    const rating = {
      id: 1000,
      rating: 4,
      description: 'test title',
      givenById: 5000,
      gottenById: 5001,
      createdAt: new Date(),
      active: true,
    };
    mockCtx.prisma.rating.findMany.mockResolvedValue([rating]);

    calculateUserRatingHelper(context, 5000).then((message: RestResponseWithData) => {
      expect(message.code).toBe(200);
      expect(message.message).toBe(`Successfully calculated rating for user:${5000}`);
      expect(message.data).toBeDefined();
    }).catch((error: any) => console.log(error));
  });

  it('invalid rating', async () => {
    mockCtx.prisma.rating.findMany.mockRejectedValue(new Error('yeet'));
    getUserRatingsHelper(context, 5001).then((message: RestResponseWithData) => {
      expect(message.code).toBe(400);
      expect(message.message).toMatch(/Something went wrong/);
      expect(message.data).toBeDefined();
      expect(message.data).toBe(null);
    }).catch((error: any) => console.log(error));
  });
});
