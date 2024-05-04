import React from 'react'


function SideBar() {
  return ( <div className='aside'>
        <img  src="src/assets\images\logo-blue-peaku.png" alt="" width="80%"/>
            <div className="lateral-nav  ">
                <div className=" active item-lateral-nav flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 cursor-pointer">
               
                <svg data-v-869d4650="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="briefcase" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-briefcase mx-2 b-icon bi"><g data-v-869d4650=""><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"></path></g></svg>
                    <p>Empleos</p>
                </div>
                <div className="  item-lateral-nav flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 cursor-pointer">
                <svg data-v-869d4650="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="file earmark check" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-file-earmark-check mx-2 b-icon bi"><g data-v-869d4650=""><path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"></path></g></svg>
                    <p>Postulaciones</p>
                </div>
                <div className="  item-lateral-nav flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 cursor-pointer">
                <svg data-v-869d4650="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="controller" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-controller mx-2 b-icon bi"><g data-v-869d4650=""><path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"></path><path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"></path></g></svg>
                    <p>Codex</p>
                </div>
                <div className="  item-lateral-nav flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 cursor-pointer">
                <svg data-v-869d4650="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="chat text" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-chat-text mx-2 b-icon bi"><g data-v-869d4650=""><path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path><path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"></path></g></svg>
                    <p>Preguntas</p>
                </div>
                <div className="  item-lateral-nav flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 cursor-pointer">
                <svg data-v-869d4650="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="braces" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-braces mx-2 b-icon bi"><g data-v-869d4650=""><path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z"></path></g></svg>
                    <p>Bootcamp</p>
                </div>
                <div className="  item-lateral-nav flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 cursor-pointer">
                <svg data-v-869d4650="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="gem" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-gem mx-2 b-icon bi"><g data-v-869d4650=""><path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"></path></g></svg>
                    <p>Premios</p>
                </div>
                <div className="  item-lateral-nav flex flex-col items-center gap-2 pt-3 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 hover:bg-hover-blue rounded-md hover:shadow-md transform hover:-translate-y-1 transition ease-in-out duration-150 cursor-pointer">
                <svg data-v-869d4650="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="file earmark person" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-file-earmark-person mx-2 b-icon bi"><g data-v-869d4650=""><path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"></path></g></svg>
                    <p>Tu CV</p>
                </div>
                

            </div>
    </div>

   

  )
}

export default SideBar
 