import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/profile.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> Karthick.
        </BigTitle>
        <Subtitle>I'm a Software Developer creating stunning web and mobile apps.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Workflow"
            link="https://www.kissflow.com"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my proud work of all time. It was used by almost 10000 companies and I'm happy to say that I'm part of it. Workflow app that helps big tech companies to improve their work through automation.
          </ProjectCard>
          <ProjectCard
            title="AI for government"
            link="freshvegges.pics:40020"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Freelance project for the government which is to help police and military to catch criminals.
          </ProjectCard>
          <ProjectCard
            title="Social App PWA "
            link="https://pacific-lowlands-88149.herokuapp.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Deep dive into PWA by building a social app for users with ExpressJs, MongoDb and firebase. It was the project built to submit my friend's final year project.
          </ProjectCard> 
          <ProjectCard
            title="Turf App"
            link="https://play.google.com/store/apps/details?id=com.turf.cricketscorer&hl=en_IN"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Andriod app built to automate local cricket matches and keep track of local young talents. You can create an account, form a team, schedule matches and
            even more. Laravel and Andriod.
          </ProjectCard>
          <ProjectCard
            title="Simple App to Book appointment to meet doctors with chat."
            link="https://arcane-woodland-79561.herokuapp.com/"
            bg="linear-gradient(to right, red 0%, #00FFEE 100%)"
          >
            App we built to experiment how booking was made in hospitals and we tried a basic version of booking a appointment.
          </ProjectCard>
          <ProjectCard
            title="Ticket booking App"
            link="https://vast-badlands-21317.herokuapp.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            This is to experiment ticket booking for bus, train and plane at saame place. Built for final year students.
          </ProjectCard>
          <ProjectCard
            title="Forum to talk about React and Laravel"
            link="https://github.com/Karthick-Ramachandran/ReactLara"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
               React and Laravel discussion forum that helps to connect react and laravel devs at same place and show the power of those two technologies.
          </ProjectCard>
          <ProjectCard
            title="Jot down your thoughts and ideas"
            link="https://still-tundra-34127.herokuapp.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
             Personal app to put my ideas, tricks and todo list. If you need one, Just sign up.
          </ProjectCard>
          <ProjectCard
            title="Weird Voice App"
            link="https://voicereg.surge.sh"
            bg="linear-gradient(to right, #D585FF 0%, red 100%)"
          >
            Web App AI which listens to our voice and reply accordingly. Built with pure JavaScript.
          </ProjectCard>
          <ProjectCard
            title="Translate Chat"
            link="https://still-atoll-46662.herokuapp.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Mini project which is called Translation App. Writing my own api to translate the texts we type using ExpressJs and Node. Think about multilingual chat app.
          </ProjectCard>
          <ProjectCard
            title="Hacker news data"
            link="https://brave-stallman-a2643a.netlify.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
             App to experiment power of nextJs and React by pulling all the data from hackernews.
          </ProjectCard>
          <ProjectCard
            title="News App"
            link="https://chennai-news.herokuapp.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Simple two page app to pull out latest news from famous newspapers and show to people. It helps people to read all the news at same place with ease.
          </ProjectCard> 
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Karthick" />
          <AboutSub>
          Son, brother, millennial, and software developer. I want talk more about me and my thoughts but the words are not enough or may be I don't know how to express my
          thoughts in <b>Interesting English way</b>.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Working in one of the best product based companies out there in my country and building the product which is used by at least 10000 companies all over the world.
          I don't feel like I have something to lead a happy life and I'm the one of very few who wants to make impact in the society. 
          I bootstrap ideas, Build products. The one who speak and hear lot of ideas but rarely implement. Open to help people who wants to build the next generation.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:karthiram165@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.twitter.com/Js_frontendguy">Twitter</a> &{' '}
            <a href="https://www.github.com/Karthick-Ramachandran">Github</a>

          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Karthick built with gatsby and cara
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
