import './App.css'

function App() {
  return (
    <>
       <div className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img 
            src="https://sxcontent9668.azureedge.us/cms-assets/assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg" 
            alt="SpaceX" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="relative z-10 container mx-auto text-center">
          
          <h1 className="text-white font-bold tracking-tight leading-none mix-blend-multiply">
            
           <div className='flex items-center justify-center'>
          <svg version="1.1" width="1200" height="550" viewBox="0 0 400 50" aria-hidden="true" className="logo">
            <title>SpaceX Logo</title>
            <g className="letter_s">
              <path fill="#fff" d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
                c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"></path>
            </g>
            <g className="letter_p">
              <path fill="#fff" d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
                c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"></path>
            </g>
            <g className="letter_a">
              <polygon fill="#fff" points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3"></polygon>
            </g>
            <g className="letter_c">
              <path fill="#fff" d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
                c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"></path>
            </g>
            <g className="letter_e">
              <polygon fill="#fff" points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5"></polygon>
              <rect fill="#fff" x="219.9" y="18.6" width="41.9" height="5.4"></rect>
            </g>
            <g className="letter_x">
              <path fill="#fff" d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"></path>
              <path fill="#fff" d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"></path>
            </g>
            <g className="letter_swoosh">
              <path fill='#fff' d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"></path>
            </g>
          </svg>
          </div>
          </h1>
          
          <div className="mt-24 md:mt-32">
            <button
              className="bg-black hover:bg-opacity-90 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors shadow-lg"
              onClick={() => {
              window.location.href = '/Dashboard';
              }}
            >
              Ver Lanzamientos
            </button>
          </div>
        </div>
      </div>

     
      
    </>
  )
}

export default App
