import React, { Component } from 'react';
import { Colors, View, Text, TouchableOpacity } from '../../../../src/UI'
import PropTypes from 'prop-types';
import { RFValue } from 'react-native-responsive-fontsize';

class StepIcon extends Component {
  render() {
    let styles;
    const isRtl = this.props.isRtl

    if (this.props.isActiveStep) {
      styles = {
        circleStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: this.props.activeStepIconColor,
          borderColor: this.props.activeStepIconBorderColor,
          borderWidth: 2,
          bottom: 2
        },
        circleText: {
          alignSelf: 'center',
          // top: 20 / 3
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 2,
          fontFamily: this.props.labelFontFamily,
          color: this.props.activeLabelColor
        },
        leftBar: {
          position: 'absolute',
          top: 40 / 2.22,
          left: isRtl ? 40 + 8 : 0,
          right: isRtl ? 0 : 40 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: 40 / 2 + 2
        },
        rightBar: {
          position: 'absolute',
          top: 40 / 2.22,
          right: isRtl ? 40 + 8 : 0,
          left: isRtl ? 0 : 40 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 40 / 2 + 2
        },
        stepNum: {
          color: this.props.activeStepNumColor,
          fontWeight: 'bold'
        }
      };
    } else if (this.props.isCompletedStep) {
      styles = {
        circleStyle: {
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: this.props.completedStepIconColor,

        },
        circleText: {
          alignSelf: 'center',
          // top: 18 / 2
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 2,
          fontFamily: this.props.labelFontFamily,
          color: this.props.labelColor,
          marginTop: 4
        },
        leftBar: {
          position: 'absolute',
          top: 36 / 2,
          left: isRtl ? 36 + 8 : 0,
          right: isRtl ? 0 : 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: 36 / 2 + 4
        },
        rightBar: {
          position: 'absolute',
          top: 36 / 2,
          right: isRtl ? 36 + 8 : 0,
          left: isRtl ? 0 : 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginLeft: 36 / 2 + 4,

        },
        stepNum: {
          color: this.props.completedStepNumColor,
          fontWeight: 'bold'
        }
      };
    } else {
      styles = {
        circleStyle: {
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: this.props.disabledStepIconColor
        },
        circleText: {
          alignSelf: 'center',
          // top: 18 / 2
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 2,
          fontFamily: this.props.labelFontFamily,
          color: this.props.labelColor,
          marginTop: 4
        },
        leftBar: {
          position: 'absolute',
          top: 36 / 2,
          left: isRtl ? 36 + 8 : 0,
          right: isRtl ? 0 : 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginRight: 36 / 2 + 4
        },
        rightBar: {
          position: 'absolute',
          top: 36 / 2,
          right: isRtl ? 36 + 8 : 0,
          left: isRtl ? 0 : 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 36 / 2 + 4
        },
        stepNum: {
          color: this.props.disabledStepNumColor,
          fontWeight: 'bold'
        }
      };
    }

    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <View style={[styles.circleStyle, { justifyContent: 'center' }]}>
          <Text style={styles.circleText}>
            {this.props.isCompletedStep ? (
              <Text style={{ color: this.props.completedCheckColor }}>&#10003;</Text>
            ) : (
                <Text style={styles.stepNum}>{this.props.stepNum}</Text>
              )}
          </Text>
        </View>
        <Text style={styles.labelText}>{this.props.label}</Text>
        {!this.props.isFirstStep && <View style={styles.leftBar} />}
        {!this.props.isLastStep && <View style={styles.rightBar} />}
      </View>
      // <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: RFValue(10), width: RFValue(40), height: RFValue(40), borderRadius: RFValue(40 / 2), backgroundColor: this.props.isCompletedStep ? Colors().App.Primary : this.props.isActiveStep ? Colors().App.White : Colors().App.lightGrey, borderWidth: 1, borderColor: Colors().App.Primary }}>
      //   <Text style={[styles.stepNum, { fontSize: RFValue(15), fontWeight: 'bold' }]}>{this.props.stepNum}</Text>
      // </View>
      // <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      //   <View style={styles.circleStyle}>
      //     <Text style={styles.circleText}>
      //       {this.props.isCompletedStep ? (
      //         <Text style={{ color: this.props.completedCheckColor }}>&#10003;</Text>
      //       ) : (
      //           <Text style={styles.stepNum}>{this.props.stepNum}</Text>
      //         )}
      //     </Text>
      //   </View>
      //   <Text style={styles.labelText}>{this.props.label}</Text>
      //   {!this.props.isFirstStep && <View style={styles.leftBar} />}
      //   {!this.props.isLastStep && <View style={styles.rightBar} />}
      // </View>
    );
  }
}

StepIcon.propTypes = {
  stepCount: PropTypes.number.isRequired,
  stepNum: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,

  borderWidth: PropTypes.number,
  borderStyle: PropTypes.string,
  activeStepIconBorderColor: PropTypes.string,

  progressBarColor: PropTypes.string,
  completedProgressBarColor: PropTypes.string,

  activeStepIconColor: PropTypes.string,
  disabledStepIconColor: PropTypes.string,
  completedStepIconColor: PropTypes.string,

  labelFontFamily: PropTypes.string,
  labelColor: PropTypes.string,
  activeLabelColor: PropTypes.string,

  activeStepNumColor: PropTypes.string,
  completedStepNumColor: PropTypes.string,
  disabledStepNumColor: PropTypes.string,

  completedCheckColor: PropTypes.string
};

StepIcon.defaultProps = {
  borderWidth: 6,
  borderStyle: 'solid',
  activeStepIconBorderColor: '#4BB543',

  progressBarColor: '#ebebe4',
  completedProgressBarColor: '#4BB543',

  activeStepIconColor: 'transparent',
  completedStepIconColor: '#4BB543',
  disabledStepIconColor: '#ebebe4',

  labelColor: 'lightgray',
  activeLabelColor: '#4BB543',

  activeStepNumColor: 'black',
  completedStepNumColor: 'black',
  disabledStepNumColor: 'white',

  completedCheckColor: 'white'
};

export default StepIcon;
