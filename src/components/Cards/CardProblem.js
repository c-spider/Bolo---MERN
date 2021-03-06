import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio, RadioGroup, FormControl, FormControlLabel } from '@material-ui/core';
import { setAnswer, setCurrentAnswer } from "app/actions/devtype";
// components
const Checkbox = props => (
    <input type="radio" name="problem" />
)


export default function CardProblem({q, c, w, checks, value}) {
  const { problem_index, values } = useSelector((state) => state.devtype);
  const dispatch = useDispatch();

  const onValueChange = (v) => {
    dispatch(setAnswer(problem_index, v));
    dispatch(setCurrentAnswer(v));
  };

  return (
    <>
    <div className="lg:w-9/12">
        <div className="py-5 border-t">
            <div className="flex flex-wrap">
                {c.length > 0 &&
                   <div className="w-full bg-blueGray-100">
                        <p className="m-4 text-lg leading-relaxed text-blueGray-700">{c}</p>
                    </div>
                }
                <div className="w-full px-4">
                    {c.length > 0
                        ? <p className="mb-4 mt-4 text-lg leading-relaxed text-blueGray-700">{q}</p>
                        : <p className="mb-4 text-lg leading-relaxed text-blueGray-700">{q}</p>
                    }
                </div>
                {w.length > 0 &&
                    <div className="w-full px-4 border-2">
                        <i className="fab fa-info-circle"></i>
                        <p className="mt-4 mb-4 text-lg leading-relaxed text-blueGray-700">{w}</p>
                    </div>
                }
            </div>
        </div>
        <div className="mb-12 px-12">
            <p> {value} </p>
            <FormControl component="fieldset">
                <RadioGroup
                    aria-label="question"
                    name="controlled-radio-buttons-group"
                    value={values[problem_index]} onChange={(e) => onValueChange(e.target.value)}
                    >
                    { 
                        checks.map((each, index) => (
                            <FormControlLabel key={index} value={each.text} control={<Radio/>} label={each.text} />
                        ))
                    }
                </RadioGroup>
            </FormControl>
        </div>
    </div>
    </>
  );
}
