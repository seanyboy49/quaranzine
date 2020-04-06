import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { PaddedWidthContainer, Row, Column } from "../../styles/layout"
import coronaHeartGif from "../../images/reflections/corona-heart.gif"
import corona from "../../images/reflections/corona1.gif"

const Reflections = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "reflections" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const titleImage = data.findFileByName("reflections-title")

  const mehirsImage = data.findFileByName("mehirs")

  return (
    <PaddedWidthContainer id="reflections">
      <Row>
        <Column>
          <div style={{ width: "80%", margin: "auto" }}>
            <Img fluid={titleImage.node.childImageSharp.fluid} />
          </div>
        </Column>
        <Column>
          <p>
            A long time ago, in 2017, I visited the coastal town of Carnac, in
            the northwest of France. Carnac is known for three things—beaches,
            crepes, and the Carnac stones: a dense collection of more than 3,000
            giant standing rocks erected thousands of years ago.
          </p>
          <p>
            To see the stones in person is equal parts breathtaking and
            confounding. Why would an entire society take the time to arrange
            fields of huge rocks in perfect rows? Over the centuries, scholars
            have proposed a variety of potential explanations, but there has
            been no definitive conclusion.
          </p>
          <p>
            I believe the answer to these unanswered questions—like most
            unanswered questions of the universe—is at once more simple and more
            profound than any academic could ever comprehend. I believe that the
            answer is: love.
          </p>
        </Column>
      </Row>
      <Row>
        <Column>
          <p>
            If we strip away all of the scientific evidence and data collected
            on these stones over centuries of study, what do we have? An
            articulation of perfect harmony. A vision of unity. A pure
            expression of humankind’s capacity to love.
          </p>
          <p>You might not agree with me at first, but think about it.</p>
          <p>
            Why would John Lennon say, “all you need is love?” Why would Whitney
            Houston proclaim, “I will always love you?” Why did Fergie say—on
            her breakthrough hit London Bridge— “I’m Fergie Ferg and me love you
            longtime.” Were all of these visionary artists bluffing? No. Quite
            simply, as Lennon points out in his masterpiece, “love is all you
            need.”
          </p>
          <p>
            In these difficult and uncertain times, unlocking the true power of
            love has never been more imperative. Just think about it.
          </p>
          <p>
            As the global economy shuts down, the stock price of love has never
            been higher. And we are all shareholders.
          </p>
        </Column>
        <Column>
          <div style={{ width: "80%", margin: "auto" }}>
            <Img fluid={mehirsImage.node.childImageSharp.fluid} />
          </div>
        </Column>
      </Row>
      <Row>
        <Column>
          <img src={corona} />
        </Column>
        <Column>
          <p>
            If we’re being honest with ourselves, we don’t need more money. We
            don’t need more clothes, gadgets or jewelry. What we need right now
            are hugs and kisses. Right now, what we need to do is walk to a
            public park and hold hands in unity.
          </p>
          <p>
            I can’t help but think that these are the times where we need to hug
            our loved ones more tightly, and keep our friends closer than ever
            before. There is a healing power in physically joining people
            together that goes beyond all human knowledge and scientific
            inquiry.
          </p>
          <p>
            In times of crisis, I know that love explains all and will heal all.
          </p>
          <p>
            And so, I implore you to ruminate on this message of love and
            togetherness in these trying times. Think about how you can apply it
            to your life.{" "}
          </p>
        </Column>
      </Row>
    </PaddedWidthContainer>
  )
}

export default Reflections
