import React, { Suspense } from 'react';

import style from './style';

const Slider = React.lazy(() => import('../question/slider'));

export default class Intro extends React.Component {
  state = {
    handPosition: 33,
    sliderValue: [33, 66]
  };

  componentDidMount() {
    let currentStep = 0;
    const steps = [
      {
        value: [50, 66],
        hand: 50
      },

      {
        value: [50, 66],
        hand: 66
      },

      {
        value: [50, 92],
        hand: 92
      },

      {
        value: [50, 92],
        hand: 50
      },

      {
        value: [33, 92],
        hand: 33
      },

      {
        value: [33, 92],
        hand: 92
      },

      {
        value: [33, 66],
        hand: 66
      },

      {
        value: [33, 66],
        hand: 33
      }
    ];

    setTimeout(() => {
      setInterval(() => {
        if (currentStep >= steps.length) {
          currentStep = 0;
        }

        const step = steps[currentStep];

        this.setState(state => ({
          ...state,
          sliderValue: step.value,
          handPosition: step.hand
        }));

        currentStep += 1;
      }, 600);
    }, 1500);
  }

  render() {
    const { introQuestion, title, intro, buttonLabel, onStart } = this.props;
    const { handPosition, sliderValue } = this.state;

    return (
      <article>
        <style jsx>{style}</style>

        {/* eslint-disable react/no-danger */}
        <strong
          className="question"
          dangerouslySetInnerHTML={{ __html: introQuestion }}
        />
        {/* eslint-enable react/no-danger */}

        {/* eslint-disable-next-line react/no-danger */}
        <h1 className="title" dangerouslySetInnerHTML={{ __html: title }} />

        <div className="slider-container">
          {typeof window !== 'undefined' && (
            <Suspense fallback={<div />}>
              <Slider
                trackStyle={[{ backgroundColor: 'rgb(125, 29, 8)' }]}
                railStyle={{ backgroundColor: 'rgb(166, 38, 9)' }}
                defaultValue={[33, 66]}
                value={sliderValue}
                max={100}
                min={0}
                disabled
                hasAnimation
                handPosition={handPosition}
              />
            </Suspense>
          )}
        </div>

        {/* eslint-disable react/no-danger */}
        <p
          className="slider-intro"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
        {/* eslint-enable react/no-danger */}

        <div className="button-container">
          <button type="button" onClick={onStart}>
            {buttonLabel}
          </button>
        </div>
      </article>
    );
  }
}
