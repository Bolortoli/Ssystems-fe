import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import FaqForm from "./FaqForm";

const FaqContent = ({ faq, content, image, contact, contactImage }) => {
  return (
    <>
      <section className="faq-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>

                  {faq.map(f => (
                    <AccordionItem uuid={f.id}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>{f.question}</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          {f.answer}
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="faq-content">
                <div className="section-title">
                  <span>{content.sub_title}</span>
                  <h2>{content.title}</h2>
                  <p>
                    {content.description}
                  </p>
                </div>

                <div className="faq-image">
                  <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${image}`} alt="image" />
                </div>
              </div>
            </div>
          </div>

          {/* Faq Form */}
          <FaqForm content={contact} image={contactImage} />
        </div>
      </section>
    </>
  );
};

export default FaqContent;
