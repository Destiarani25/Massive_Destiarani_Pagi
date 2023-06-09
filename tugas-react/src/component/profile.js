function Profile () {
    return (

        <div class="overflow-hidden bg-white py-15 sm:py-20">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
         
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Profile</p>
          <p class="mt-4 text-lg leading-8 text-gray-600">I'm a marketing management study program student who is excited to start a career in the marketing industry. I have a good understanding of basic concepts in marketing, such as market segmentation, branding, promotion, and sales.I have a special interest in digital marketing and social media and am active as a content creator.</p>
         
          <h2 class="text-base font-semibold mt-7 max-w-xl space-y-5 leading-7 text-indigo-600">About Me</h2>

          <dl class="mt-3 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-1">
              <dt class="inline font-semibold text-gray-900">
                {/* <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> */}
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                {/* </svg> */}
                Name 
              </dt>
              <dd class="line">Destiarani Putri Natalia</dd>
            </div>
            <div class="relative pl-1">
              <dt class="inline font-semibold text-gray-900">
                {/* <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> */}
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                {/* </svg> */}
                Education
              </dt>
              <dd class="line">Maritim Raja Ali Haji University (UMRAH)</dd>
            </div>
            <div class="relative pl-1">
              <dt class="inline font-semibold text-gray-900">
                {/* <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> */}
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                {/* </svg> */}
                Social Media
              </dt>
              <div class="flex">
        <img className="w-7 h-7 object-cover rounded-full shadow" src="https://img.icons8.com/ios-glyphs/30/null/instagram-new.png" alt="" />
        <div class="mx-3">
          <h1 className="inline">luv.depulia</h1>
           
        </div>
              </div>

              <div class="flex">
              <img className="w-7 h-7 object-cover rounded-full shadow" src="https://img.icons8.com/ios-glyphs/30/null/linkedin-circled--v1.png" alt="" />
        <div class="mx-3">
          <h1 className="inline">destiaraniputri</h1>
     
        </div>
      </div>

              
              
            </div>
          </dl>
        </div>
      </div>
      <img src="photo4.jpg" alt="Product screenshot" class="w-[47rem] max-w-x1 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] md:-ml-5 lg:-ml-3" width="2432" height="1442"/>
    </div>
  </div>
</div>


)
}
export default Profile;