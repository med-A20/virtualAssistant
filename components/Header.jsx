
import React from 'react'

const Header = () => {
    const datas = [
        {
            title : 'last news',
            exemple : {
                title  : "",
                list : ""
            },
            say : 'Give me the latest news'
        },
        {
            title : 'news by categorie',
            exemple : {
                title  : "categorie",
                list : "business, entertainment, general, health, science, sports, technology..."
            },
            say : 'Give me the latest technology news'
        },
        {
            title : 'news by term',
            exemple : {
                title  : "terms",
                list : "Bitcion, playstation 5, smartphone, ..."
            },
            say : 'what\'s with bitcion'
        },
        {
            title : 'news by sources',
            exemple : {
                title  : "sources",
                list : "CNN, Wired, BBC NEWS, time, Icn, Al Jazzera English, ..."
            },
            say : 'Show me the news from BCC news'
        }
    ]
  return (
    <header className='w-full'>
        {/* logo */}
        <section className='mx-auto mb-5 flex flex-row justify-center'>
            <img
            src='../assets/headImage.webp'
            className='min-w-[300px] rounded-xl'
            />
        </section>

        {/* Guide */}
        <section className='w-full mx-auto flex flex-row flex-wrap  justify-center items-center'>
            {datas.map((data, key)=>(
                <div className='w-[250px] h-[280px] px-2 m-2 bg-gradient-to-r from-[#20beff] to-[#1b9eff] shadow-lg rounded-xl flex flex-col justify-between py-3' key={key}>
                    {/* title */}
                    <div>
                        <p className='text-xl lg:text-2xl font-semibold text-white capitalize'>
                            {data.title}
                        </p>
                    </div>

                    {/* cat */}
                    <div className=''>
                            <p className='text-lg lg:text-xl font-semibold text-white capitalize'>{data.exemple?.title}</p>
                            <p className='text-white capitalize'>{data.exemple?.list}</p>
                    </div>

                    {/* Say */}
                    <div>
                            <p className='text-lg lg:text-xl font-semibold text-white capitalize'>
                                Try Saying :
                            </p>
                            <p className='text-white capitalize'>
                                {data.say}
                            </p>
                    </div>
                </div>
            ))

            }
        </section>

        {/* copy rigth */}

        <p className='text-xl text-[#333] font-medium capitalize'>
            Created by <span
            className='text-[#20beff] uppercase italic'
            >Amchia Mohamed</span> with <span
            className='text-[#20beff] uppercase italic'
            > Alan </span> studio 
        </p>
    </header>
  )
}

export default Header