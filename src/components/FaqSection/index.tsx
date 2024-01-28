import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FaqCollapsible: React.FC<{
  faqs: Array<{ title: string; desc: string }>;
}> = ({ faqs }) => {
  return (
    <Collapse accordion>
      {faqs.map((faq, index) => (
        <Panel header={faq.title} key={index.toString()}>
          <p>{faq.desc}</p>
        </Panel>
      ))}
    </Collapse>
  );
};

export default FaqCollapsible;
