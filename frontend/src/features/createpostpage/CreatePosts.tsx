import React from 'react';
import '../../stylesheets/CreatePosts.css';

function CreatePosts(){
return(
    <form>
        <div className='objectPlacement'>
            <div className='font'>
                <label htmlFor="trade_type">Jeg vil</label>
            </div>
            <div id='trade_type'>
                <div>
                <input type="radio" name ="Valg" value= "Kjøpe" className='radiobutton'/>
                <label> Kjøpe  </label>
                </div>
                <div>
                <input type="radio" name='Valg' value="Selge" className='radiobutton'/>
                <label htmlFor='Valg'> Selge</label>
                </div>
            </div>

            <p></p>
            <div></div>
            <div>
            <div>Overskrift</div> 
            <input type="text" />
            </div>

            <div>
                <div>Kategori</div> 
                <input type="radio" name ="Valg" value= "Konsert" className='radiobutton'/>
                <label> Konsert  </label>

                <input type="radio" name ="Valg" value= "Sport" className='radiobutton'/>
                <label> Sport  </label>

                <input type="radio" name ="Valg" value= "Teater/Show" className='radiobutton'/>
                <label> Teater/Show  </label>

                <input type="radio" name ="Valg" value= "Annet" className='radiobutton'/>
                <label> Annet  </label>

            </div> 

            <div></div>
            
        <p></p>
           <div>
            <div>Beskrivelse</div> 

            <input type="textarea" />
            </div>
        
        <p></p>
            <div>
            <div>Pris</div> 
            <input type="text" />
            </div>
        
            <p></p>

            <div>
            <div>Gateadressse</div> 
            <input type="text" />
            </div>
        
            <p></p>

            <div>
            <div>Postnummer</div> 
            <input type="text" />
            </div>

            <p></p>

            <div>
            <div>Sted</div> 
            <input type="text" />
            </div>

            <p></p>

            <div>
            <div>Telefon</div> 
            <input type="text" />
            </div>






        </div>
    </form>
);
}

export default CreatePosts;