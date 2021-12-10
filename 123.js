*,

*::before,

*::after {

  box-sizing: border-box;

}

body {

  max-width: 1000px;

  margin: 100px auto 0;

  padding-left: 6.25%;

}

.loader {

  position: relative;

  display: inline-block;

  margin: 0 12.5% 100px;

  width: 40px;

  height: 40px;

  border: 2px solid #0cf;

  border-radius: 50%;

  -webkit-animation: rotation 0.75s infinite linear;

  animation: spin 0.75s infinite linear;

}

.loader::before,

.loader::after {

  left: -2px;

  top: -2px;

  display: none;

  position: absolute;

  content: '';

  width: inherit;

  height: inherit;

  border: inherit;

  border-radius: inherit;

}

/*

 * LOADER 1

 */

.loader-1 {

  border-top-width: 0;

}

/*

 * LOADER 2

 */

.loader-2 {

  border-top-color: transparent;

}

.loader-2::after {

  display: block;

  left: -2px;

  top: -2px;

  border: inherit;

  transform: rotate(65deg);

}

/*

 * LOADER 3

 */

.loader-3,

.loader-3::before,

.loader-3::after {

  display: inline-block;

  border-color: transparent;

  border-top-color: #0cf;

    -webkit-animation-duration: 1.2s;

  animation-duration: 1.2s;

}

.loader-3::before {

  transform: rotate(120deg);

}

.loader-3::after {

  transform: rotate(240deg);

}

/*

 * LOADER 4

 */

.loader-4 {

  border-top-color: transparent;

}

.loader-4::after {

  display: block;

  border-color: transparent;

  border-top-color: #0cf;

  animation: spin 1.25s infinite linear reverse;

}

/*

 * LOADER 5

 */

.loader-5,

.loader-5::before {

  display: inline-block;

  border-color: transparent;

  border-top-color: #0cf;

}

.loader-5::before {

  animation: spin 1.5s infinite ease;

}

/*

 * LOADER 6

 */

.loader-6 {

  border-color: transparent;

  border-top-color: #0cf;

  animation-duration: 3s;

}

.loader-6::after {

  display: block;

  border-color: transparent;

  border-top-color: #0cf;

  animation: spin 0.75s infinite ease-in-out alternate;

}

@keyframes spin {

  from {

    transform: rotate(0deg);

  }

  to {

    transform: rotate(360deg);

}

    

    		@-webkit-keyframes spin {		  from {

		    -webkit-transform: rotate(0deg);

		  }

		  to {

		    -webkit-transform: rotate(360deg);

		  }

		}
