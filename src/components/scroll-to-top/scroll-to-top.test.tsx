import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent } from '../../utils/test-utils'
import { vi } from 'vitest'
import React from "react";
import { useState } from 'react';


import { ScrollToTop } from './scroll-to-top.component'
import App from './../../app'
import { wait } from '@testing-library/user-event/dist/types/utils/misc/wait'

const mockSetState = vi.fn();

// vi.mock('react', () => ({
//   useState: (initial: any) => [initial, mockSetState]
// }));

// vi.mock('react', () => {
//   return {
//     useState: (initial: any) => [initial, mockSetState],
//   }
// }

describe('ScrollToTop', () => {
  // vi.spyOn(window, 'scrollTo')
  vi.spyOn(window, 'scrollTo').mockImplementation(() => { console.log('test for scrolling')})

  // beforeEach(() => {
  //   render(<ScrollToTop />)
  // })

  it('should render the scroll to top button', async () => {

    
    render(<App />)
    
    const setStateMock = vi.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock]
    vi.spyOn(React, 'useState').mockImplementation(useStateMock)
    
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {
      console.log('hello')
    })
    // const element = screen.getByTestId('custom-element')
    fireEvent.scroll(window, { target: { scrollY: 50000 } });



    // const setState = vi.fn();
    // vi.spyOn(React, "useState")
    // .mockImplementation((stateValue: any) => [stateValue=false, stateSetter])


    // console.log(element)
    // const user = userEvent.setup()


  })
})
