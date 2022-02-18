import React from 'react';
import './CreatePosts.css';

function CreatePosts(){
return(
    <form>
        <div className='objectPlacement'>
        <div >Jeg vil</div> 
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

            <div></div>

            <div>
            <div>Overskrift</div> 
            <textarea className="widthforBig" ></textarea>
            </div>
            
            <p></p>
            <div>
                <div>Kategori</div> 
                <input type="radio" name ="Theme" value= "Konsert" className='radiobutton'/>
                <label> Konsert  </label>

                <input type="radio" name ="Theme" value= "Sport" className='radiobutton'/>
                <label> Sport  </label>

                <input type="radio" name ="Theme" value= "Teater/Show" className='radiobutton'/>
                <label> Teater/Show  </label>

                <input type="radio" name ="Theme" value= "Annet" className='radiobutton'/>
                <label> Annet  </label>

            </div> 

            <div></div>
            <p></p>
           <div className='input_textarea'>
            <div>Beskrivelse</div> 
            <textarea className="textareaSize" ></textarea>
            </div>

            <p></p>
            <div>
            <div>Pris</div> 
            <textarea className="widthforSmall" ></textarea>
            </div>

            <p></p>
            <div>
            <div>Gateadressse</div> 
            <textarea className="widthforBig" ></textarea>
            </div>

            <p></p>
            <div>
            <div>Postnummer</div> 
            <textarea className="widthforSmall" ></textarea>
            </div>

            <p></p>
            <div>
            <div>Sted</div> 
            <textarea className="widthforSmall" ></textarea>
            </div>

            <p></p>
            <div>
            <div>Telefon</div> 
            <textarea className="widthforSmall" ></textarea>

            </div>
            <p></p>
            <div className='widthforBig'>
                <button className='button'>  Send annonse </button>
            </div>
            <p className='textareaSizeSpace'></p>






        </div>
    </form>
);
}

export default CreatePosts;