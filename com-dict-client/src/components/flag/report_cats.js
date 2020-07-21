import React from "react";
import { Radio, Input, Typography, Button, Row, Col } from 'antd';

class Report_word extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '6vmin',
      lineHeight: '5vmin',
    };
    const { value } = this.state;

    const {Text} = Typography;
    return (
    <div>
    <Row>
      <Radio.Group onChange={this.onChange} value={value} size="large">
        <Radio style={radioStyle} value={1}>
        <Text style={{fontSize:"large"}}>Are inside jokes with no context</Text>
        </Radio>
        <Radio style={radioStyle} value={2}>
        <Text style={{fontSize:"large"}}>Include terms that don’t actually seem real</Text>
        </Radio>
        <Radio style={radioStyle} value={3}>
        <Text style={{fontSize:"large"}}>Include full names or other personal information</Text>
        </Radio>
        <Radio style={radioStyle} value={4}>
        <Text style={{fontSize:"large"}}>Include hate speech, bullying, or any other statements meant to discriminate or incite violence against others</Text>
        </Radio>
        <Radio style={radioStyle} value={5}>
        <Text style={{fontSize:"large"}}>Go against any of our other content guidelines</Text>
        
        </Radio>
      </Radio.Group>
      </Row>
      <Row>
          <Button
          type="primary"
          // size="large"
          htmlType="submit"
          block>
            Submit your report here... Our team will look into it
        </Button>
      </Row>
      </div>
      );

  }
}

export default Report_word;