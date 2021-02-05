import React from "react";
import Link from 'next/link'
import { Button } from 'react-bootstrap';

function AgeChecker() {
  return (
    <>
        <form className="form__Container">
          <label for="checkbox" className="agetxt__Label">I'm 21 <span>+</span></label>
          <Link href="/about">
            <Button type="button" id="checkbox" aria-label="I am over 21 years old" tabindex="0" className="age__Btn">
              <div></div>     
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"></path></svg>
            </Button>
          </Link>
        </form>
    </>
  );
}

export default AgeChecker;