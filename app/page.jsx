import Feed from "@components/Feed"


const Home = () => {
    return (
        <section className="w-full flex-centre flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI- Powered Prompts</span>
            </h1>
            <p className="desc text-center">
                Share-Prompts is an AI prompting tool to discover, create and share creative prompts
            </p>
            <Feed />
        </section>
    )
}

export default Home