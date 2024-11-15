import ParalaxContentTitleHolder from "@/app/main/components/ParalaxContentTitleHolder"
import LayoutClient from "../layout-client"

const AboutPage = () => {
    return (
        <main>
            <LayoutClient>
                <ParalaxContentTitleHolder title="ABOUT ILO EATS" description="We’re in the business of making people feel special. In everything we do, we have to ask ourselves if we’re putting the Guest first and making sure they’ll come back for more." />
                <div className="mx-auto max-w-screen-2xl">
                    <section>
                        <div>                        <h2>We only use the highest quality ingredients.
                            The result is a taste you can swear by.</h2>
                            <p>Spicy jalapeno bacon ipsum dolor amet jowl brisket burgdoggen, meatball bresaola bacon boudin tri-tip pig pork fatback pork chop prosciutto short ribs pork belly. Ham boudin rump strip steak, porchetta drumstick picanha spare ribs sausage. Tongue ham hock turkey kevin ham short loin tenderloin beef ribs shank turducken chicken. Shankle ham boudin porchetta, corned beef ribeye strip steak pork chop.</p>
                        </div>
                        <img src="" alt="" />
                    </section>
                </div>
            </LayoutClient>
        </main>
    )
}

export default AboutPage