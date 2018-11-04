import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
// components
import { Image, List, Label, Icon, Button } from 'semantic-ui-react'

class SummaryList extends Component {
  render() {
    const {items} = this.props;
    // const shares = <span>Shares: {summary.shares}</span>;
    return (
      <List selection animated relaxed verticalAlign='top'>
        {items.map(item => (
          <List.Item>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
            <List.Content>
              <List.Header>
                {item.name}
              </List.Header>
              <List.Description>
                <Label image size="mini" color="blue">
                  Quantity
                  <Label.Detail>
                    <strong>{item.shares}</strong>
                  </Label.Detail>
                </Label>                
                <Label image size="mini" color="green">
                  Cost
                  <Label.Detail>
                    <strong>
                      <NumberFormat value={item.cost} 
                        displayType={'text'} 
                        thousandSeparator={true} prefix={'$'} 
                        decimalScale={0}
                        fixedDecimalScale={true}
                      />
                    </strong>
                  </Label.Detail>
                </Label>     
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>      
      // <Card fluid>
      //   <Card.Content>
      //     <Card.Header>
      //       <Button basic size="mini" icon='world' floated="right" circular />
      //       {summary.name}
      //     </Card.Header>
      //     <Card.Description>
      //       <List>
      //         <List.Item icon='chess' content={shares} />
      //       </List>            
      //     </Card.Description>
      //   </Card.Content>
      // </Card>
    );
  }
}

SummaryList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default SummaryList;
