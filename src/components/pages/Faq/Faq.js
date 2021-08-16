import React, {useState} from 'react';

import './Faq.css';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question">
				{faq.question}
			</div>
			<div className="faq-answer">
				<div>{faq.answer}</div>
        
				{faq.answer1 ? <div><br/>{faq.answer1}</div> : ""}
				{faq.answer2 ? <div><br/>{faq.answer2}</div> : ""}
				{faq.answer3 ? <div><br/>{faq.answer3}</div> : ""}
			</div>
		</div>
	)
}

function Products() {
  const [faqs, setfaqs] = useState([
    {
      question: 'What is Woodlands Youth Music Festival 2021 (#WYMF2021)? ',
      answer: 'None. We don\'t address hardware issues.',
      open: false
    },
    {
      question: 'Who is eligible to enter the competition?',
      answer: 'NA',
      open: false
    },
    {
      question: 'What must I do?',
      answer: 'NA',
      open: false
    },
    {
      question: 'What is the timeline for the competition?',
      answer: `23rd August: Registration opens for 3 weeks for WYMF2021`,
      answer1: `13th September: Registration closes`,
      answer2: `18th September: Announcement of 10 finalists`,
      answer3: `25th September: Woodlands Music Youth Fest 2021 (Held for 500 audience and streamed live on Facebook)`,
      open: false
    },
    {
      question: 'What are the prizes?',
      answer: `Grand Prize: $2,000 Cash Award + Publicity Coverage + 1Y Airtime @ Woodlands Megaevents`,
      answer1: `1st Runner Up: $750 Cash Award + 1Y Airtime @ Woodlands Megaevents`,
      answer2: `2nd Runner Up: $500 Cash Award`,
      answer3: `Popular choice: $250 Cash Award`
      ,
      open: false
    },
    {
      question: 'How do I enter?',
      answer: 'NA',
      open: false
    },
    {
      question: 'Can I sing a song while my band plays the song?',
      answer: 'Yes, but only you can be featured in the video and you participate as an individual',
      open: false
    },
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default Products;
