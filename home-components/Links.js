import React from 'react';

const Links = () => {
  return (
    <div className='flex flex-col gap-2 border-2 rounded'>
      <div className='bg-blue-500 py-1 rounded'>
        <h1 className='text-xl text-gray-50 font-extrabold tracking-wider px-2 text-center'>
          USEFUL LINKS
        </h1>
      </div>
      <div className='flex flex-col gap-5 p-2 tracking-wider rounded'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-500'>NEWS</h1>
          <hr />
          <ul className='text-sm '>
            <li>
              <a
                href='https://www.kantipurdaily.com/'
                className='text-gray-600'
              >
                Kantipur Daily
              </a>
            </li>
            <li>
              <a
                href='https://www.nepalipatra.com/category/news/samachar/uk'
                className='text-gray-600'
              >
                Nepali Patra
              </a>
            </li>
            <li>
              <a
                href='https://www.readingchronicle.co.uk/'
                className='text-gray-600'
              >
                Reading Chronicle
              </a>
            </li>
            <li>
              <a href='https://www.bbc.com/nepali' className='text-gray-600'>
                BBC Nepali
              </a>
            </li>
            <li>
              <a href='https://kantipurtv.com/' className='text-gray-600'>
                Kantipur TV
              </a>
            </li>
            <li>
              <a
                href='https://www.youtube.com/user/TheEkantipur/videos'
                className='text-gray-600'
              >
                Kantipur Youtube
              </a>
            </li>
            <li>
              <a href='https://ekantipur.com/' className='text-gray-600'>
                Ekantipur
              </a>
            </li>
            <li>
              <a
                href='https://thehimalayantimes.com/'
                className='text-gray-600'
              >
                The Himalayan times
              </a>
            </li>
            <li>
              <a href='https://annapurnapost.com/' className='text-gray-600'>
                Annapurna Post
              </a>
            </li>
            <li>
              <a
                href='https://nagariknews.nagariknetwork.com/'
                className='text-gray-600'
              >
                Nagarik News
              </a>
            </li>
            <li>
              <a href='https://ratopati.com/' className='text-gray-600'>
                Rato pani
              </a>
            </li>
            <li>
              <a href='https://www.onlinekhabar.com/' className='text-gray-600'>
                Online Khabar
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-500'>RADIO</h1>
          <hr />
          <ul className='text-sm text-gray-600'>
            <li>
              <a
                className='text-gray-600'
                href='https://liveonlineradio.net/bfbs-gurkha-radio'
              >
                BFBS Radio
              </a>
            </li>
            <li>
              <a
                className='text-gray-600'
                href='https://liveonlineradio.net/bbc-nepali'
              >
                BBC Nepali
              </a>
            </li>
            <li>
              <a
                className='text-gray-600'
                href='https://liveonlineradio.net/radio-nepal'
              >
                Radio Nepal
              </a>
            </li>
            <li>
              <a
                className='text-gray-600'
                href='https://liveonlineradio.net/hits-fm-91-2'
              >
                Hits FM 91.2
              </a>
            </li>
            <li>
              <a
                className='text-gray-600'
                href='https://liveonlineradio.net/nepal-fm-91-8'
              >
                Nepal FM 91.8
              </a>
            </li>
            <li>
              <a
                className='text-gray-600'
                href='https://liveonlineradio.net/kantipur-fm-96-1'
              >
                Kantipur FM 96.1
              </a>
            </li>
            <li>
              <a className='text-gray-600' href='http://radiobgws.co.uk/'>
                Radio BGWS
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-500'>CALENDAR</h1>
          <hr />
          <ul className='text-sm text-gray-600'>
            <li>
              <a className='text-gray-600' href='https://www.hamropatro.com/'>
                Hamro Patra
              </a>
            </li>
            <li>
              <a className='text-gray-600' href='http://nepalipatro.com.np/'>
                Nepali Patro
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-gray-500'>TOURISM</h1>
          <hr />
          <ul className='text-sm text-gray-600'>
            <li>
              <a className='text-gray-600' href='https://ntb.gov.np/'>
                Nepal Tourism
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Links;
