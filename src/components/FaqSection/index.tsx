import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FaqCollapsible: React.FC<{
  faqs: Array<{ title: string; desc: string; group?: string[]; end?: string }>;
}> = ({ faqs }) => {
  return (
    <Collapse accordion>
      {faqs.map((faq, index) => (
        <Panel header={faq.title} key={index.toString()}>
          <p>{faq.desc}</p>
          {faq.group && (
            <ul>
              {faq.group.map((f) => (
                <li>{f}</li>
              ))}
            </ul>
          )}
          {faq.end && <p>{faq.end}</p>}
        </Panel>
      ))}
    </Collapse>
  );
};

export default FaqCollapsible;
