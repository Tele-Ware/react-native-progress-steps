import React, { Component } from 'react';
import { View } from 'react-native';
import { times } from 'lodash';

import StepIcon from './StepIcon';

class ProgressSteps extends Component {
  state = {
    showStepper: true,
    stepCount: 0,
    activeStep: this.props.activeStep || 0
  };

  componentDidMount() {
    this.setState({ stepCount: React.Children.count(this.props.children) });
  }
  componentWillReceiveProps(next) {
    this.setState({ showStepper: next.showStepper })
  }

  getChildProps() {
    return { ...this.props, ...this.state };
  }

  renderStepIcons = () => {
    let step = [];

    times(this.state.stepCount, i => {
      step.push(
        <View key={i}>
          <View>
            <StepIcon
              {...this.getChildProps()}
              stepNum={i + 1}
              label={this.props.children[i].props.label}
              isFirstStep={i === 0}
              isLastStep={i === this.state.stepCount - 1}
              isCompletedStep={i < this.state.activeStep}
              isActiveStep={i === this.state.activeStep}
              isRtl={this.props.isRtl}
            />
          </View>
        </View>
      );
    });

    return step;
  };

  // Callback function from ProgressStep that passes current step.
  setActiveStep = step => {
    if (step > -1) {
      this.setState({ activeStep: step });
    }
  };

  render() {
    const styles = {
      stepIcons: {
        position: 'relative',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        // flexDirection: 'row',
        top: 30,
        marginBottom: 50,
        paddingTop: 20,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: 'white',
        flexDirection: this.props.isRtl ? 'row-reverse' : 'row'
      }
    };

    const { showStepper } = this.state

    // transform: [I18nManager.isRTL ? { rotate: '180deg' } : { rotate: '0deg' }]
    return (
      <View style={{ flex: 1 }}>
        {showStepper && <View style={styles.stepIcons}>{this.renderStepIcons()}</View>}
        <View style={{ flex: 1 }}>
          {React.cloneElement(this.props.children[this.state.activeStep], {
            setActiveStep: this.setActiveStep,
            activeStep: this.state.activeStep,
            stepCount: this.state.stepCount
          })}
        </View>
      </View>
    );
  }
}

export default ProgressSteps;
