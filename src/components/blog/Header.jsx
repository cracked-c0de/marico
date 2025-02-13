import Twitter from "/src/assets/twitter_logo.svg"
import YouTube from "/src/assets/youtube_logo.svg"
import WordPress from "/src/assets/wordpress_logo.svg"
import Substack from "/src/assets/substack_logo.svg"
import Medium from "/src/assets/medium_logo.svg"
import Spotify from "/src/assets/spotify_logo.svg"
import Anchor from "/src/assets/anchor_logo.svg"
import Apple from "/src/assets/podcast_logo.svg"
import Instagram from "/src/assets/instagram_logo.svg"
import LinkedIn from "/src/assets/linkedin_logo.svg"
import Facebook from "/src/assets/facebook_logo.svg"

function Header() {
    let list = [
        {logo: Twitter, h1: "Twitter", p: "Connect your Twitter feed to your Marico homepage.", available: true},
        {logo: YouTube, h1: "YouTube", p: "Connect your YouTube feed to your Marico homepage.", available: true},
        {logo: WordPress, h1: "WordPress", p: "Connect your WordPress feed to your Marico homepage.", available: true},
        {logo: Substack, h1: "Substack", p: "Connect your Substack feed to your Marico homepage.", available: true},
        {logo: Medium, h1: "Medium", p: "Connect your Medium feed to your Marico homepage.", available: true},
        {logo: WordPress, h1: "RSS Feeds", p: "Connect your RSS Feeds feed to your Marico homepage.", available: false},
        {logo: Spotify, h1: "Spotify", p: "Connect your Spotify feed to your Marico homepage.", available: true},
        {logo: Anchor, h1: "Anchor", p: "Connect your Anchor feed to your Marico homepage.", available: true},
        {logo: Apple, h1: "Apple Podcasts", p: "Connect your Apple Podcasts feed to your Marico homepage.", available: true},
        {logo: Instagram, h1: "Instagram", p: "Connect your Instagram feed to your Marico homepage.", available: false},
        {logo: LinkedIn, h1: "LinkedIn", p: "Connect your LinkedIn feed to your Marico homepage.", available: false},
        {logo: Facebook, h1: "Facebook", p: "Connect your Facebook feed to your Marico homepage.", available: false},
    ]
    return(
        <header>
            <div className="custom-container">
                <div className="grid grid-cols-3">
                    {list.map((key, index) => (
                        <div className="relative border border-[#707070] rounded-lg m-2 p-5" key={index}>
                            {!key.available && <p className="absolute right-3 top-3 border py-1 px-3 rounded-lg text-[12px] bg-[#102142] border-[#102142] text-[#4A7DE3]">Coming Soon</p>}
                            <img src={key.logo} alt="" className="w-[45px]" />
                            <h1 className="my-4 text-[23px] font-[600]">{key.h1}</h1>
                            <p className="text-[16px] font-[300] text-[#828282]">{key.p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header