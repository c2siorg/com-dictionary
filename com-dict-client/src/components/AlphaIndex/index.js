import React from "react";
import { Tabs, Row, Col } from "antd";

const { TabPane } = Tabs;

function AlphaIndex() {
  return (
    // Row to contain the content with 3-column grid layout
    <Row>
      {/* Empty column to push content to the center */}
      <Col span={3}></Col>
      {/* Main content column with 18 spans */}
      <Col span={18}>
        {/* Tabs component for displaying alphabetical index */}
        <Tabs
          // Set the default active tab to 'A'
          defaultActiveKey="1"
          // Set gutter width for tab bar
          tabBarGutter="4px"
          // Set type of tabs to 'card'
          type="card"
        >
          {/* Generate tabs for each letter of the alphabet */}
          {[...Array(26).keys()].map((i) => (
            <TabPane
              // Set tab title to current letter of the alphabet
              tab={`${String.fromCharCode(i + 65)}`}
              // Set unique key for each tab
              key={String.fromCharCode(i + 65)}
            >
              {/* Content of tab {String.fromCharCode(i + 65)} */}
            </TabPane>
          ))}
        </Tabs>
      </Col>
      {/* Empty column to push content to the center */}
      <Col span={3}></Col>
    </Row>
  );
}

export default AlphaIndex;
