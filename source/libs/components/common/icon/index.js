/* eslint-disable react/prop-types */

import React, { memo } from "react";

const icons = {
  heart: ({ ...props }) => (
    <svg aria-hidden="true" viewBox="0 0 100 125" {...props}>
      <title>{props.title}</title>
      <path d="M91.58,13.11a28.71,28.71,0,0,0-40.56,0l-1,1-1-1A28.68,28.68,0,0,0,8.39,53.68l1,1L50,95.27,90.55,54.71l1-1A28.64,28.64,0,0,0,91.58,13.11Z" />
    </svg>
  ),
  historical: ({ ...props }) => (
    <svg aria-hidden="true" viewBox="0 0 100 125" {...props}>
      <path d="M 5.6531292,3.507373 A 3.1642368,3.1642368 0 0 0 2.4892088,6.6712934 V 95.435627 a 3.1642368,3.1642368 0 0 0 3.1639204,3.163924 H 79.623676 c 4.761629,0 9.330441,-1.893371 12.69741,-5.260324 3.366935,-3.366966 5.260325,-7.93577 5.260325,-12.697387 V 6.6712934 A 3.1642368,3.1642368 0 0 0 94.417487,3.507373 Z M 8.8170499,9.8352139 H 34.46674 V 19.05816 H 16.819546 a 3.1642368,3.1642368 0 0 0 -3.16392,3.163921 v 9.864084 a 3.1642368,3.1642368 0 0 0 3.16392,3.16392 H 34.46674 v 7.03849 h -5.47352 a 3.1642368,3.1642368 0 0 0 -3.16392,3.16392 v 9.865619 a 3.1642368,3.1642368 0 0 0 3.16392,3.16392 h 5.47352 V 92.271711 H 8.8170499 Z m 28.8136101,0 H 62.725746 V 42.288575 H 37.63066 v -7.03849 h 17.693545 c 1.798538,0 3.526719,-0.715077 4.798409,-1.98672 1.271746,-1.271746 1.988263,-2.999927 1.988263,-4.79841 V 22.222081 A 3.1642368,3.1642368 0 0 0 58.946957,19.05816 H 37.63066 Z m 28.259006,0 H 91.253563 V 80.64184 c 0,3.085799 -1.224472,6.041399 -3.40647,8.223405 -2.181974,2.181973 -5.137606,3.406466 -8.223417,3.406466 H 65.889666 V 58.482034 h 10.65196 c 1.798483,0 3.526699,-0.716493 4.798422,-1.988263 1.271769,-1.27173 1.988263,-2.999926 1.988263,-4.79841 v -6.242866 a 3.1642368,3.1642368 0 0 0 -3.16392,-3.16392 H 65.889666 Z M 37.63066,58.482034 H 62.725746 V 92.271711 H 37.63066 Z m -20.784854,7.038489 a 3.1642368,3.1642368 0 0 0 -3.16392,3.16392 v 9.81464 a 3.1642368,3.1642368 0 0 0 3.16392,3.163916 h 6.211971 c 1.793627,0 3.517765,-0.713792 4.786055,-1.982081 1.268312,-1.268313 1.982077,-2.990885 1.982077,-4.784497 v -6.211978 a 3.1642368,3.1642368 0 0 0 -3.163921,-3.16392 z" />
    </svg>
  ),
  save: ({ ...props }) => (
    <svg aria-hidden="true" viewBox="22 30 54 40" {...props}>
      <title>{props.title}</title>
      <path
        fillRule="nonzero"
        strokeWidth="2px"
        d="M32 29h30.757a3 3 0 0 1 2.122.879l5.242 5.242A3 3 0 0 1 71 37.243V68a3 3 0 0 1-3 3H32a3 3 0 0 1-3-3V32a3 3 0 0 1 3-3zm6 3h-5a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V37.657a1 1 0 0 0-.293-.707l-4.657-4.657a1 1 0 0 0-.707-.293h-.464a.879.879 0 0 0-.879.879V40a3 3 0 0 1-3 3H42a3 3 0 0 1-3-3v-7a1 1 0 0 0-1-1zm15 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3z"
      />
    </svg>
  ),
  openURL: ({ ...props }) => (
    <svg aria-hidden="true" viewBox="0 0 8 10" {...props}>
      <title>{props.title}</title>
      <path d="M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z" />
    </svg>
  ),
  reload: ({ ...props }) => (
    <svg viewBox="0 0 100 105" {...props}>
      <title>{props.title}</title>
      <path d="M86.13 59.37a3 3 0 0 0-3.73 2c-3.61 12.09-14.8 24.28-31.67 24.28-15.93 0-33-13.26-33-33 0-15.93 13.26-33 33-33 10.6 0 19.26 5.37 24.67 11.15l-16.13-.25a3 3 0 0 0 0 6l22.6.35a3 3 0 0 0 2.17-.88 3 3 0 0 0 .88-2.17l-.35-22.6a3 3 0 0 0-3-3 3 3 0 0 0-3 3l.22 14.21a39.61 39.61 0 0 0-28-11.9c-23.32 0-39 20.16-39 39s15.67 39 39 39c20 0 33.17-14.35 37.42-28.56a3 3 0 0 0-2.08-3.63z" />
    </svg>
  ),
  resource: ({ ...props }) => (
    <svg viewBox="0 -5 100 125" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.023 21.181c-14.246-.382-26.924 9.86-29.215 24.319-2.493 15.725 8.24 30.496 23.969 32.965 14.033 2.227 27.291-6.066 31.75-19.057l8.344 2.885a37.183 37.183 0 0 1-4.75 9.311l4.371 6.457-7.15 7.15-6.51-4.367a36.748 36.748 0 0 1-9.262 4.748l-.287 7.842-10 1.566-2.686-7.365a35.683 35.683 0 0 1-5.2-.447 39.662 39.662 0 0 1-5.108-1.168l-4.821 6.154-9.026-4.582 2.138-7.531a38.581 38.581 0 0 1-7.363-7.369l-7.531 2.143-4.609-9 6.176-4.85c-1.021-3.275-1.566-6.742-1.637-10.285l-7.341-2.707 1.569-9.976 7.839-.284a36.894 36.894 0 0 1 4.723-9.312l-4.371-6.509 7.151-7.148 6.51 4.392a37.81 37.81 0 0 1 9.29-4.75l.305-7.838L51.27 5l2.753 16.181z"
      />
      <path d="M68.752 21.434a1.482 1.482 0 0 1-2.018.548l-.346-.199a1.483 1.483 0 0 1-.549-2.019l4.271-7.458a1.483 1.483 0 0 1 2.018-.548l.342.196c.707.404.953 1.313.549 2.019l-4.267 7.461zM79.422 33.916a1.478 1.478 0 0 1-2.02-.532l-.195-.334a1.487 1.487 0 0 1 .535-2.024l7.414-4.328a1.487 1.487 0 0 1 2.025.53l.191.325c.41.702.172 1.612-.529 2.022l-7.421 4.341zM82.475 50.055a1.478 1.478 0 0 1-1.486-1.467l-.004-.387a1.487 1.487 0 0 1 1.471-1.488l8.584-.062a1.486 1.486 0 0 1 1.492 1.468l.004.381a1.48 1.48 0 0 1-1.465 1.49l-8.596.065zM58.459 49.5a4.726 4.726 0 0 1-6.957 4.171l-2.392 2.387-1.608-1.605 2.312-2.312a4.712 4.712 0 0 1-.809-2.641 4.732 4.732 0 0 1 4.731-4.723 4.66 4.66 0 0 1 2.783.912l12.449-11.451.615.612-11.538 12.714c.264.594.414 1.245.414 1.936z" />
    </svg>
  ),
  bottomCaret: ({ ...props }) => (
    <svg viewBox="0 -5 100 110" {...props}>
      <path d="M40.6 70.6l-2.7-2.9L56.3 50 37.9 32.3l2.7-2.9L62.1 50z" />
    </svg>
  ),
  dropdown: ({ ...props }) => (
    <svg viewBox="17 16 69.5 73" enableBackground="new 0 0 100 100" {...props}>
      <path d="M36.642,71.512c-2.696,1.681-4.902,0.457-4.902-2.72V31.208c0-3.177,2.206-4.401,4.902-2.72l29.597,18.456  c2.696,1.681,2.696,4.432,0,6.113L36.642,71.512z" />
    </svg>
  ),
  prevMonth: ({ ...props }) => (
    <svg
      viewBox="11 10.5 69.5 71"
      enableBackground="new 0 0 100 100"
      {...props}
    >
      <title>{props.title}</title>
      <path d="M36.642,71.512c-2.696,1.681-4.902,0.457-4.902-2.72V31.208c0-3.177,2.206-4.401,4.902-2.72l29.597,18.456  c2.696,1.681,2.696,4.432,0,6.113L36.642,71.512z" />
    </svg>
  ),
  nextMonth: ({ ...props }) => (
    <svg viewBox="8 17 68 71" enableBackground="new 0 0 100 100" {...props}>
      <title>{props.title}</title>
      <path d="M36.642,71.512c-2.696,1.681-4.902,0.457-4.902-2.72V31.208c0-3.177,2.206-4.401,4.902-2.72l29.597,18.456  c2.696,1.681,2.696,4.432,0,6.113L36.642,71.512z" />
    </svg>
  ),
  prevTS: ({ ...props }) => (
    <svg viewBox="17 16 69.5 73" enableBackground="new 0 0 100 100" {...props}>
      <title>{props.title}</title>
      <path d="M36.642,71.512c-2.696,1.681-4.902,0.457-4.902-2.72V31.208c0-3.177,2.206-4.401,4.902-2.72l29.597,18.456  c2.696,1.681,2.696,4.432,0,6.113L36.642,71.512z" />
    </svg>
  ),
  nextTS: ({ ...props }) => (
    <svg viewBox="14 6 68 73" enableBackground="new 0 0 100 100" {...props}>
      <title>{props.title}</title>
      <path d="M36.642,71.512c-2.696,1.681-4.902,0.457-4.902-2.72V31.208c0-3.177,2.206-4.401,4.902-2.72l29.597,18.456  c2.696,1.681,2.696,4.432,0,6.113L36.642,71.512z" />
    </svg>
  ),
  reloadCalendar: ({ ...props }) => (
    <svg viewBox="0 0 100 125" {...props}>
      <title>{props.title}</title>
      <path d="M86.13,59.37a3,3,0,0,0-3.73,2c-3.61,12.09-14.8,24.28-31.67,24.28-15.93,0-33-13.26-33-33,0-15.93,13.26-33,33-33,10.6,0,19.26,5.37,24.67,11.15l-16.13-.25h0a3,3,0,0,0,0,6l22.6.35a3,3,0,0,0,2.17-.88,3,3,0,0,0,.88-2.17l-.35-22.6a3,3,0,0,0-3-3h0a3,3,0,0,0-3,3l.22,14.21a39.61,39.61,0,0,0-28-11.9c-23.32,0-39,20.16-39,39s15.67,39,39,39c20,0,33.17-14.35,37.42-28.56A3,3,0,0,0,86.13,59.37Z" />
    </svg>
  ),
  lastTS: ({ ...props }) => (
    <svg viewBox="19 11 65 63" enableBackground="new 0 0 100 100" {...props}>
      <title>{props.title}</title>
      <g>
        <path d="M32.521,69.097c-3.146,1.961-5.72,0.533-5.72-3.174V32.743c0-3.707,2.574-5.135,5.72-3.174l25.975,16.197   c3.146,1.962,3.146,5.172,0,7.134L32.521,69.097z" />
        <path d="M73.199,66.175c0,3.09-2.021,5.618-4.492,5.618c-2.47,0-4.492-2.528-4.492-5.618V32.491   c0-3.09,2.021-5.618,4.492-5.618c2.471,0,4.492,2.528,4.492,5.618V66.175z" />
      </g>
    </svg>
  ),
  firstTS: ({ ...props }) => (
    <svg viewBox="10 17 65 63" enableBackground="new 0 0 100 100" {...props}>
      <title>{props.title}</title>
      <g>
        <path d="M67.479,69.097c3.146,1.961,5.72,0.533,5.72-3.174V32.743c0-3.707-2.574-5.135-5.72-3.174L41.505,45.766   c-3.146,1.962-3.146,5.172,0,7.134L67.479,69.097z" />
        <path d="M26.801,66.175c0,3.09,2.021,5.618,4.492,5.618c2.47,0,4.492-2.528,4.492-5.618V32.491   c0-3.09-2.021-5.618-4.492-5.618c-2.471,0-4.492,2.528-4.492,5.618V66.175z" />
      </g>
    </svg>
  ),
  forwardTS: ({ ...props }) => (
    <svg viewBox="0 10 33 10" enableBackground="new 0 0 32 32" {...props}>
      <title>{props.title}</title>
      <g>
        <polygon points="27.529,16 15.471,9.301 15.471,15.412 4.471,9.301 4.471,22.699 15.471,16.588 15.471,22.699  " />
      </g>
    </svg>
  ),
  backwardTS: ({ ...props }) => (
    <svg viewBox="1 11 33 10" enableBackground="new 0 0 32 32" {...props}>
      <title>{props.title}</title>
      <g>
        <polygon points="27.529,16 15.471,9.301 15.471,15.412 4.471,9.301 4.471,22.699 15.471,16.588 15.471,22.699  " />
      </g>
    </svg>
  ),
  history: ({ ...props }) => (
    <svg viewBox="0 0 40 32" {...props}>
      <title>{props.title}</title>
      <path d="M20 2c7.732 0 14 6.268 14 14s-6.268 14-14 14v-3c2.938 0 5.701-1.144 7.778-3.222s3.222-4.84 3.222-7.778c0-2.938-1.144-5.701-3.222-7.778s-4.84-3.222-7.778-3.222c-2.938 0-5.701 1.144-7.778 3.222-1.598 1.598-2.643 3.601-3.041 5.778h5.819l-7 8-7-8h5.143c0.971-6.784 6.804-12 13.857-12zM26 14v4h-8v-10h4v6z" />
    </svg>
  ),
  globe: ({ ...props }) => (
    <svg viewBox="0 0 96 120" {...props}>
      <title>{props.title}</title>
      <path d="M48 6.5C25.1 6.5 6.5 25.1 6.5 48S25.1 89.5 48 89.5 89.5 70.9 89.5 48 70.9 6.5 48 6.5zm10.4 70.9c-1.3-2.3-2.7-5.2-4.3-8.6.7-.9 1.4-1.8 2-2.7v-3.2h-4.8c-.7-1.3-1.5-2.7-2.2-4-.9.1-1.9.2-2.8.3-3.3-1.8-6.6-3.7-9.8-5.6l-3-3.9h-3.6c-3.2-4.7-5.9-9.2-8-13.2.4-2.1.9-4.2 1.4-6.1-.6-1.4-1.2-2.7-1.6-3.9-.6.2-1.2.5-1.8.7-.1-.8-.3-1.6-.4-2.4h1.3c-.6-.9-1.1-1.8-1.6-2.5 3-3.3 6.5-6.1 10.5-8.3 1.3-.1 2.7-.1 4.1-.1-.8-.3-1.5-.6-2.2-.8 1.3-.6 2.6-1.1 3.9-1.6 7-.7 13.3-.6 18.4-.4H56c.9-.1 1.7-.2 2.5-.2.2 0 .4.1.5.1h-3c-.4.1-.7.1-1.1.2 3.2.5 7.2 1.5 11.6 3.3-.9.6-1.9 1.3-3 2-2.5-.4-4.9-.7-7.3-1 .2-.8.5-1.6.7-2.2h-2.3c-.3.4-.7.9-1 1.4.3.5.5 1 .8 1.5-1.8-.1-3.7-.2-5.5-.3-1 .8-2.1 1.6-3.3 2.6.6.4 1.3.8 2 1.2 1.4.3 2.7.6 4.2.9 1.3 1.1 2.6 2.4 4 3.7.5-1.3.9-2.5 1.4-3.7-.3-.2-.6-.5-.9-.7 0-1.1-.1-2.1-.1-3 2.9.4 5.9.8 8.9 1.3 2.8 2.1 5.8 4.6 8.7 7.4-3.1 1.5-6.6 3.3-10.3 5.2.1 1.1.1 2.2.2 3.4l-2.1-.3c-.6.6-1.3 1.3-2 1.9.2.9.3 1.8.5 2.7-1.6 1.4-3.3 2.8-5 4.2.5 1.6 1 3.1 1.5 4.7h-2.5c-.7-1.1-1.4-2.2-2.1-3.2h-7.8c-1 1.8-2 3.6-3 5.3 1 .9 1.9 1.9 2.9 2.8h1.3c.9-.6 1.9-1.1 2.8-1.7.6.3 1.3.7 1.9 1-.2 1.3-.5 2.7-.7 4 .9.1 1.9.2 2.8.3.2 1.4.5 2.8.7 4.1h5c1.6-.7 3.3-1.4 4.9-2.1 1.1.4 2.3.8 3.4 1.2h6.3c.1 1.3.1 2.7.2 3.9l4.8-.3c0 1.5.1 2.9.1 4.2 1-.1 2.1-.2 3.1-.2.2.1.3.2.5.3-5 8.6-13.3 15.1-23.1 17.8l.1-.1c1.2-.8 2.6-2.9 4.1-6.6-1.2 0-2.5-.3-3.9-.7zm.4-29.4v-2.5c.9 1.3 1.9 2.6 2.8 3.9-.9-.5-1.9-1-2.8-1.4zm.7 2.9c-.2.7-.5 1.5-.7 2.2-1.8-.4-3.7-.8-5.5-1.2.2-.9.4-1.8.5-2.7 1.9.6 3.8 1.1 5.7 1.7zm2.4 1c3.3 1.4 6.6 2.8 9.7 4.1-.6.2-1.1.5-1.7.7-2.8-1-5.7-2-8.6-3l.6-1.8z" />
    </svg>
  ),
  info: ({ ...props }) => (
    <svg viewBox="0 0 22 27.5" {...props}>
      <title>{props.title}</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-940.000000, -1415.000000)">
          <g transform="translate(135.000000, 1322.000000)">
            <g transform="translate(400.000000, 88.000000)">
              <g transform="translate(400.000000, 0.000000)">
                <circle strokeWidth="1" cx="16" cy="16" r="10" />
                <path d="M18.2734375,20.9765625 L18.1015625,21.6796875 C17.5859349,21.8828135 17.1744807,22.0377599 16.8671875,22.1445312 C16.5598943,22.2513026 16.203127,22.3046875 15.796875,22.3046875 C15.1718719,22.3046875 14.6861996,22.1523453 14.3398438,21.8476562 C13.9934879,21.5429672 13.8203125,21.1562523 13.8203125,20.6875 C13.8203125,20.5052074 13.8333332,20.3190114 13.859375,20.1289062 C13.8854168,19.9388011 13.927083,19.7239595 13.984375,19.484375 L14.625,17.203125 C14.682292,16.9843739 14.7304686,16.7773447 14.7695312,16.5820312 C14.8085939,16.3867178 14.828125,16.2083341 14.828125,16.046875 C14.828125,15.7552069 14.7682298,15.5520839 14.6484375,15.4375 C14.5286452,15.3229161 14.2994809,15.265625 13.9609375,15.265625 C13.79427,15.265625 13.6236988,15.2916664 13.4492188,15.34375 C13.2747387,15.3958336 13.1250006,15.4453123 13,15.4921875 L13.171875,14.7890625 C13.5937521,14.6171866 13.9973939,14.4700527 14.3828125,14.3476562 C14.7682311,14.2252598 15.1328108,14.1640625 15.4765625,14.1640625 C16.0963573,14.1640625 16.5742171,14.3138006 16.9101562,14.6132812 C17.2460954,14.9127619 17.4140625,15.3020809 17.4140625,15.78125 C17.4140625,15.8802088 17.4023439,16.0546862 17.3789062,16.3046875 C17.3554686,16.5546888 17.3125003,16.7838531 17.25,16.9921875 L16.609375,19.265625 C16.5572914,19.4479176 16.5104169,19.6562488 16.46875,19.890625 C16.4270831,20.1250012 16.40625,20.3020827 16.40625,20.421875 C16.40625,20.7239598 16.4739577,20.929687 16.609375,21.0390625 C16.7447923,21.148438 16.979165,21.203125 17.3125,21.203125 C17.4687508,21.203125 17.6458323,21.1757815 17.84375,21.1210938 C18.0416677,21.066406 18.1848954,21.0182294 18.2734375,20.9765625 Z M18.4375,11.4375 C18.4375,11.8333353 18.2877619,12.1705715 17.9882812,12.4492188 C17.6888006,12.727866 17.3281271,12.8671875 16.90625,12.8671875 C16.4843729,12.8671875 16.1223973,12.727866 15.8203125,12.4492188 C15.5182277,12.1705715 15.3671875,11.8333353 15.3671875,11.4375 C15.3671875,11.0416647 15.5182277,10.7031264 15.8203125,10.421875 C16.1223973,10.1406236 16.4843729,10 16.90625,10 C17.3281271,10 17.6888006,10.1406236 17.9882812,10.421875 C18.2877619,10.7031264 18.4375,11.0416647 18.4375,11.4375 Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
  leftNav: ({ ...props }) => (
    <svg viewBox="13 -1.7 68 107" {...props}>
      <title>{props.title}</title>
      <polygon points="40.6,70.6 37.9,67.7 56.3,50 37.9,32.3 40.6,29.4 62.1,50" />
    </svg>
  ),
  rightNav: ({ ...props }) => (
    <svg viewBox="13 -5.5 68 105" {...props}>
      <title>{props.title}</title>
      <polygon points="40.6,70.6 37.9,67.7 56.3,50 37.9,32.3 40.6,29.4 62.1,50" />
    </svg>
  ),
  close: ({ ...props }) => (
    <svg viewBox="0 0 1024 1280" {...props}>
      <title>{props.title}</title>
      <path d="M887.132 833.893L560.497 507.258l320.308-320.314c12.085-12.088 12.085-31.67 0-43.757-12.086-12.085-31.684-12.085-43.756 0L516.74 463.5 190.101 136.86c-12.026-12.026-31.535-12.026-43.561 0-12.04 12.026-12.04 31.549 0 43.575L473.173 507.07l-336.267 336.27c-12.08 12.087-12.08 31.669 0 43.755 12.086 12.087 31.677 12.087 43.763 0l336.262-336.267L843.573 877.47c12.026 12.026 31.52 12.026 43.56 0 12.026-12.027 12.026-31.55 0-43.577z" />
    </svg>
  ),
  carouselClose: ({ ...props }) => (
    <svg viewBox="0 0 24 24" {...props}>
      <title>{props.title}</title>
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  ),
  image: ({ ...props }) => (
    <svg viewBox="0 0 100 125" {...props}>
      <title>{props.title}</title>
      <g transform="translate(0,-952.36218)">
        <path
          d="m 17,965.36229 c -3.28938,0 -6,2.71062 -6,6 l 0,61.99981 c 0,3.2894 2.71062,6 6,6 l 66,0 c 3.28938,0 6,-2.7106 6,-6 l 0,-61.99981 c 0,-3.28938 -2.71062,-6 -6,-6 z m 0,4 66,0 c 1.14257,0 2,0.85743 2,2 l 0,43.15621 -12.59375,-12.5937 c -0.76011,-0.7526 -2.14831,-0.7224 -2.875,0.062 L 56.9375,1015.456 37.40625,995.92479 c -0.42223,-0.41568 -1.03615,-0.62819 -1.625,-0.5625 -0.41482,0.0439 -0.81445,0.2215 -1.125,0.5 L 15,1013.7998 15,971.36229 c 0,-1.14257 0.85743,-2 2,-2 z m 39,6 c -5.49916,0 -10,4.50084 -10,10 0,5.49915 4.50084,10 10,10 5.49916,0 10,-4.50085 10,-10 0,-5.49916 -4.50084,-10 -10,-10 z m 0,4 c 3.3374,0 6,2.6626 6,6 0,3.33739 -2.6626,6 -6,6 -3.3374,0 -6,-2.66261 -6,-6 0,-3.3374 2.6626,-6 6,-6 z m -20.0625,20.75001 19.65625,19.6562 c 0.76011,0.7526 2.14831,0.7224 2.875,-0.062 L 71.0625,1006.2373 85,1020.1748 l 0,13.1873 c 0,1.1426 -0.85743,2 -2,2 l -66,0 c -1.14257,0 -2,-0.8574 -2,-2 l 0,-14.1248 z"
          fillOpacity="1"
          stroke="none"
          marker="none"
          visibility="visible"
          display="inline"
          overflow="visible"
        />
      </g>
    </svg>
  ),
  document: ({ ...props }) => (
    <svg viewBox="0 0 100 125" {...props}>
      <title>{props.title}</title>
      <path d="M82.92,36.75a2,2,0,0,0-.62-1.45L55.83,10.05a2,2,0,0,0-1.38-.55H22.08a5,5,0,0,0-5,5v71a5,5,0,0,0,5,5H77.92a5,5,0,0,0,5-5ZM56.45,16.17,75.93,34.75H56.45ZM77.92,86.5H22.08a1,1,0,0,1-1-1v-71a1,1,0,0,1,1-1H52.45V36.75a2,2,0,0,0,2,2H78.92V85.5A1,1,0,0,1,77.92,86.5Z" />
    </svg>
  ),
  clear: ({ ...props }) => (
    <svg viewBox="0 -13 100 125" {...props}>
      <title>{props.title}</title>
      <g transform="translate(0,-952.36218)">
        <path
          d="M 50 9 C 39.512994 9 28.994127 13.00587 21 21 C 5.0131593 36.98684 5.0131596 63.0131 21 79 C 36.986841 94.9868 63.013159 94.9868 79 79 C 94.986841 63.0131 94.986841 36.98684 79 21 C 71.005874 13.00587 60.487006 9 50 9 z M 50 15 C 58.96309 15 67.904204 18.4042 74.75 25.25 C 87.720564 38.220559 88.383163 58.732147 76.78125 72.5 L 27.46875 23.21875 C 33.970325 17.734366 41.975207 15 50 15 z M 23.21875 27.46875 L 72.53125 76.78125 C 58.76329 88.399111 38.226282 87.726277 25.25 74.75 C 12.273718 61.773723 11.600885 41.236708 23.21875 27.46875 z "
          transform="translate(0,952.36218)"
          fillOpacity="1"
          marker="none"
          visibility="visible"
          display="inline"
          overflow="visible"
        />
      </g>
    </svg>
  ),
  settings: ({ ...props }) => (
    <svg viewBox="0 0 100 125" {...props}>
      <title>{props.title}</title>
      <g>
        <path d="M33.5,39a11,11,0,0,0-10.6,8H10.5v6H22.9a11,11,0,0,0,21.2,0H89.5V47H44.1A11,11,0,0,0,33.5,39Zm0,16a5,5,0,1,1,5-5A5,5,0,0,1,33.5,55Z" />
        <path d="M66.5,11.5a11,11,0,0,0-10.6,8H10.5v6H55.9a11,11,0,0,0,21.2,0H89.5v-6H77.1A11,11,0,0,0,66.5,11.5Zm0,16a5,5,0,1,1,5-5A5,5,0,0,1,66.5,27.5Z" />
        <path d="M66.5,66.5a11,11,0,0,0-10.6,8H10.5v6H55.9a11,11,0,0,0,21.2,0H89.5v-6H77.1A11,11,0,0,0,66.5,66.5Zm0,16a5,5,0,1,1,5-5A5,5,0,0,1,66.5,82.5Z" />
      </g>
    </svg>
  ),
  timestamp: ({ ...props }) => (
    <svg viewBox="0 0 100 125" enableBackground="new 0 0 100 100" {...props}>
      <title>{props.title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.023,21.181c-14.246-0.382-26.924,9.86-29.215,24.319  c-2.493,15.725,8.24,30.496,23.969,32.965c14.033,2.227,27.291-6.066,31.75-19.057l8.344,2.885c-1.164,3.371-2.756,6.479-4.75,9.311  l4.371,6.457l-7.15,7.15l-6.51-4.367c-2.826,1.994-5.939,3.609-9.262,4.748l-0.287,7.842l-10,1.566l-2.686-7.365  c-1.732-0.025-3.465-0.166-5.2-0.447c-1.759-0.287-3.445-0.666-5.108-1.168l-4.821,6.154l-9.026-4.582l2.138-7.531  c-2.778-2.117-5.249-4.584-7.363-7.369l-7.531,2.143l-4.609-9l6.176-4.85c-1.021-3.275-1.566-6.742-1.637-10.285l-7.341-2.707  l1.569-9.976l7.839-0.284c1.138-3.374,2.753-6.486,4.723-9.312l-4.371-6.509l7.151-7.148l6.51,4.392  c2.85-1.992,5.986-3.609,9.29-4.75l0.305-7.838L51.27,5L54.023,21.181z"
      />
      <g>
        <path d="M68.752,21.434c-0.404,0.706-1.312,0.953-2.018,0.548l-0.346-0.199c-0.707-0.404-0.953-1.313-0.549-2.019l4.271-7.458   c0.404-0.706,1.312-0.952,2.018-0.548l0.342,0.196c0.707,0.404,0.953,1.313,0.549,2.019L68.752,21.434z" />
      </g>
      <g>
        <path d="M79.422,33.916c-0.703,0.411-1.611,0.171-2.02-0.532l-0.195-0.334c-0.408-0.704-0.168-1.614,0.535-2.024l7.414-4.328   c0.703-0.41,1.613-0.171,2.025,0.53l0.191,0.325c0.41,0.702,0.172,1.612-0.529,2.022L79.422,33.916z" />
      </g>
      <g>
        <path d="M82.475,50.055c-0.814,0.006-1.482-0.654-1.486-1.467l-0.004-0.387c-0.004-0.812,0.658-1.482,1.471-1.488l8.584-0.062   c0.814-0.006,1.484,0.655,1.492,1.468l0.004,0.381c0.008,0.812-0.65,1.482-1.465,1.49L82.475,50.055z" />
      </g>
      <g>
        <g>
          <path d="M58.459,49.5c0,2.613-2.115,4.73-4.723,4.73c-0.809,0-1.57-0.205-2.234-0.559l-2.392,2.387l-1.608-1.605l2.312-2.312    c-0.508-0.756-0.809-1.66-0.809-2.641c0-2.605,2.122-4.723,4.731-4.723c1.043,0,2.006,0.337,2.783,0.912l12.449-11.451    l0.615,0.612L58.045,47.564C58.309,48.158,58.459,48.809,58.459,49.5z" />
        </g>
      </g>
    </svg>
  ),
  error: ({ ...props }) => (
    <svg viewBox="10 6 52 55.5" {...props}>
      <title>{props.title}</title>
      <g transform="translate(0,-982.36218)">
        <path
          d="m 34.9999,996.36218 c -0.675,0 -1.3452,0.3217 -1.6874,0.9375 l -20.9994,38.00002 c -0.7934,1.3003 -0.024,3.0145 1.6874,3.0625 l 41.9989,0 c 1.3622,0 2.5993,-1.5543 1.6874,-3.0625 L 36.6874,997.29968 c -0.3422,-0.6158 -1.0124,-0.9375 -1.6875,-0.9375 z m 0,6.06252 17.5933,31.875 -35.1866,0 z m 0,5.9062 c -1.1045,0 -1.9999,0.8954 -1.9999,2 l 0,15 c 0,1.1047 0.8954,2 1.9999,2 1.1046,0 2,-0.8953 2,-2 l 0,-15 c 0,-1.1046 -0.8954,-2 -2,-2 z m 0,20 c -1.1045,0 -1.9999,0.8955 -1.9999,2 0,1.1046 0.8954,2 1.9999,2 1.1046,0 2,-0.8954 2,-2 0,-1.1045 -0.8954,-2 -2,-2 z"
          fillOpacity="1"
          stroke="none"
          marker="none"
          visibility="visible"
          display="inline"
          overflow="visible"
        />
      </g>
    </svg>
  ),
  leftPaddle: ({ ...props }) => (
    <svg viewBox="30 0 64 105" {...props}>
      <title>{props.title}</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M49.5096739,35.076303 L49.5604692,35 L51.641518,36.3853649 L84.9382989,58.551203 L87.0193478,59.9365678 L84.248618,64.0986655 L82.1675692,62.7133006 L49.5096739,40.972772 L16.8517786,62.7133006 L14.7707298,64.0986655 L12,59.9365678 L14.0810488,58.551203 L47.3778298,36.3853649 L49.4588786,35 L49.5096739,35.076303 Z"
          transform="translate(49.509674, 49.549333) rotate(-90.000000) translate(-49.509674, -49.549333) "
        />
      </g>
    </svg>
  ),
  rightPaddle: ({ ...props }) => (
    <svg viewBox="25 -10 64 105" {...props}>
      <title>{props.title}</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M49.5096739,35.076303 L49.5604692,35 L51.641518,36.3853649 L84.9382989,58.551203 L87.0193478,59.9365678 L84.248618,64.0986655 L82.1675692,62.7133006 L49.5096739,40.972772 L16.8517786,62.7133006 L14.7707298,64.0986655 L12,59.9365678 L14.0810488,58.551203 L47.3778298,36.3853649 L49.4588786,35 L49.5096739,35.076303 Z"
          transform="translate(49.509674, 49.549333) scale(-1, 1) rotate(-90.000000) translate(-49.509674, -49.549333) "
        />
      </g>
    </svg>
  ),
  cardError: ({ ...props }) => (
    <svg viewBox="0 0 70 87.5" {...props}>
      <title>{props.title}</title>
      <g transform="translate(0,-982.36218)">
        <path
          d="m 34.9999,996.36218 c -0.675,0 -1.3452,0.3217 -1.6874,0.9375 l -20.9994,38.00002 c -0.7934,1.3003 -0.024,3.0145 1.6874,3.0625 l 41.9989,0 c 1.3622,0 2.5993,-1.5543 1.6874,-3.0625 L 36.6874,997.29968 c -0.3422,-0.6158 -1.0124,-0.9375 -1.6875,-0.9375 z m 0,6.06252 17.5933,31.875 -35.1866,0 z m 0,5.9062 c -1.1045,0 -1.9999,0.8954 -1.9999,2 l 0,15 c 0,1.1047 0.8954,2 1.9999,2 1.1046,0 2,-0.8953 2,-2 l 0,-15 c 0,-1.1046 -0.8954,-2 -2,-2 z m 0,20 c -1.1045,0 -1.9999,0.8955 -1.9999,2 0,1.1046 0.8954,2 1.9999,2 1.1046,0 2,-0.8954 2,-2 0,-1.1045 -0.8954,-2 -2,-2 z"
          fill="#000000"
          fillOpacity="1"
          stroke="none"
          marker="none"
          visibility="visible"
          display="inline"
          overflow="visible"
        />
      </g>
    </svg>
  ),
  redirect: ({ ...props }) => (
    <svg viewBox="0 0 104 120" {...props}>
      <title>{props.title}</title>
      <path d="M102.08,52.22l-15.836-12c-1.424-1.084-3.4-1.084-4.828,0l-15.836,12c-1.752,1.337-2.096,3.845-0.76,5.597  c1.328,1.752,3.836,2.104,5.596,0.768l9.412-7.132v24.012c0,6.584-5.393,11.933-12,11.933c-6.616,0-12-5.416-12-12.068V20.532  c0-10.992-8.976-19.936-20-19.936s-20,9-20,20.068v22.7l-9.416-7.14c-1.76-1.336-4.268-0.988-5.6,0.772  c-1.332,1.752-0.992,4.26,0.768,5.596l15.832,12c0.716,0.549,1.568,0.816,2.416,0.816c0.848,0,1.7-0.26,2.416-0.813l15.832-12  c1.764-1.336,2.108-3.844,0.772-5.596c-1.332-1.76-3.84-2.112-5.604-0.772l-9.416,7.132v-22.7c0-6.652,5.384-12.068,12-12.068  c6.616,0,12,5.36,12,11.936v54.808c0,11.068,8.972,20.068,20,20.068c11.023,0,20-8.944,20-19.937V51.46l9.416,7.132  c0.732,0.549,1.576,0.813,2.416,0.813c1.216,0,2.412-0.553,3.195-1.584C104.18,56.064,103.836,53.557,102.08,52.22L102.08,52.22z" />
    </svg>
  ),
  pathArrow: ({ ...props }) => (
    <svg viewBox="0 0 100 125" {...props}>
      <title>{props.title}</title>
      <g transform="translate(0,-952.36218)">
        <path
          d="m 80.750711,1001.6725 -16.00015,-17.00005 c -0.3873,-0.4042 -1.04921,-0.4071 -1.42211,-0.047 -0.379,0.3659 -0.4068,1.0376 -0.047,1.4221 l 14.40636,15.31255 -57.68765,0 c -0.5523,0 -1,0.4477 -1,1 0,0.5523 0.4477,1 1,1 l 57.68765,0 -14.40636,15.3125 c -0.3601,0.3845 -0.3379,1.0621 0.047,1.4221 0.3846,0.36 1.00351,0.3689 1.42211,-0.047 l 16.00015,-17 c 0.3803,-0.468 0.2803,-1.0416 0,-1.3752 z"
          fillOpacity="1"
          marker="none"
          visibility="visible"
          display="inline"
          overflow="visible"
        />
      </g>
    </svg>
  ),
  arrowLeft: ({ ...props }) => (
    <svg viewBox="0 0 1792 1792" {...props}>
      <title>{props.title}</title>
      <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z" />
    </svg>
  ),
  arrowRight: ({ ...props }) => (
    <svg viewBox="0 0 1792 1792" {...props}>
      <title>{props.title}</title>
      <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
    </svg>
  ),
  verticalMenu: ({ ...props }) => (
    <svg viewBox="0 0 50 62.5" preserveAspectRatio="xMidYMid meet" {...props}>
      <title>{props.title}</title>
      <rect x="0" y="0" width="50" height="50" stroke=" none" fill=" none" />
      <path
        d="m 25.019531,6.019531 a 4,4 0 0 0 -4,4 4,4 0 0 0 4,4 4,4 0 0 0 4,-4 4,4 0 0 0 -4,-4 z M 25,21 a 4,4 0 0 0 -4,4 4,4 0 0 0 4,4 4,4 0 0 0 4,-4 4,4 0 0 0 -4,-4 z m -0.01953,14.980469 a 4,4 0 0 0 -4,4 4,4 0 0 0 4,4 4,4 0 0 0 4,-4 4,4 0 0 0 -4,-4 z"
        stroke="none"
      />
    </svg>
  ),
  archive: ({ ...props }) => (
    <svg viewBox="0 0 13.1 15" {...props}>
      <title>{props.title}</title>
      <g>
        <path d="M.1 1.5l.2.4h12.3l.3-.4L6.5 0z" />
        <path d="M.4 2.5h12.2v1.1H.4z" />
      </g>
      <path d="M1 4.2h1l.2.1s.2 2.8.2 3.7c0 .9-.1 4.5-.1 4.5H1l-.3-.1S.5 9.5.5 8s.2-3.7.2-3.7l.3-.1z" />
      <path d="M11 4.2h1.1l.2.1s.2 2.8.2 3.7c0 .9-.1 4.5-.1 4.5l-.3.1h-1l-.3-.1s-.2-2.9-.2-4.4.2-3.7.2-3.7l.2-.2z" />
      <path d="M4.3 4.2h1l.2.1s.2 2.8.2 3.7c0 .9-.1 4.5-.1 4.5l-.3.1h-.9l-.3-.1s-.2-2.9-.2-4.4.2-3.7.2-3.7l.2-.2z" />
      <path d="M7.7 4.2H9s.2 2.8.2 3.7c0 .9-.1 4.5-.1 4.5l-.3.1h-1l-.3-.1S7.3 9.5 7.3 8s.2-3.7.2-3.7l.2-.1z" />
      <g>
        <path d="M.4 13.1h12.3v.6H.4z" />
        <path d="M0 14.3h13.1v.7H0z" />
      </g>
    </svg>
  ),
  selection: ({ ...props }) => (
    <svg viewBox="0 0 100 125" {...props}>
      <title>{props.title}</title>
      <g>
        <path d="M60.7,26.6c-3.2-1.5-6.6-2.3-10.2-2.3l-0.1,4c3,0.1,5.9,0.7,8.6,2L60.7,26.6z" />
        <path d="M55.6,71c-2.8,0.8-5.9,0.9-8.8,0.5l-0.6,4c1.2,0.2,2.5,0.3,3.7,0.3c2.3,0,4.5-0.3,6.7-0.9L55.6,71z" />
        <path d="M28.4,52.6c-0.1-0.9-0.2-1.7-0.2-2.6c0-2.1,0.3-4.2,0.9-6.2l-3.8-1.1c-0.7,2.4-1.1,4.8-1.1,7.3c0,1,0.1,2.1,0.2,3.1   L28.4,52.6z" />
        <path d="M70,41.4c1.2,2.7,1.8,5.6,1.8,8.6v0.1l4-0.1c0-3.5-0.7-7-2.1-10.2L70,41.4z" />
        <path d="M75.4,54.3l-3.9-0.7c-0.5,2.9-1.6,5.7-3.2,8.2l3.4,2.2C73.6,61,74.8,57.8,75.4,54.3z" />
        <path d="M46.9,28.4l-0.6-4c-3.5,0.5-6.8,1.7-9.8,3.5l2.1,3.4C41.2,29.9,44,28.9,46.9,28.4z" />
        <path d="M69.1,67.3l-3-2.7c-2,2.2-4.4,4-7.1,5.2l1.7,3.6C63.8,72,66.7,70,69.1,67.3z" />
        <path d="M25.3,57.2c1,3.4,2.6,6.5,4.9,9.2l3.1-2.5c-1.9-2.3-3.3-4.9-4.1-7.8L25.3,57.2z" />
        <path d="M43.4,70.7c-2.8-0.9-5.4-2.4-7.7-4.3l-2.6,3c2.7,2.3,5.7,4.1,9.1,5.1L43.4,70.7z" />
        <path d="M68.3,38.2l3.4-2.2c-1.9-3-4.4-5.5-7.3-7.5l-2.2,3.3C64.6,33.6,66.7,35.7,68.3,38.2z" />
        <path d="M35.8,33.5l-2.6-3c-2.7,2.3-4.8,5.1-6.4,8.3l3.6,1.7C31.7,37.8,33.5,35.5,35.8,33.5z" />
        <circle cx="50" cy="50" r="10.5" />
      </g>
    </svg>
  ),
  infoWarn: ({ ...props }, ref) => (
    <svg viewBox="0 0 24 24" {...props} ref={ref}>
      <title>{props.title}</title>
      <g>
        <path d="M12 5.511c0.561 0 1.119 0.354 1.544 1.062l5.912 9.854c0.851 1.415 0.194 2.573-1.456 2.573h-12c-1.65 0-2.307-1.159-1.456-2.573l5.912-9.854c0.425-0.708 0.983-1.062 1.544-1.062zM12 3.511c-1.296 0-2.482 0.74-3.259 2.031l-5.912 9.856c-0.786 1.309-0.872 2.705-0.235 3.83s1.879 1.772 3.406 1.772h12c1.527 0 2.77-0.646 3.406-1.771s0.551-2.521-0.235-3.83l-5.912-9.854c-0.777-1.294-1.963-2.034-3.259-2.034z" />
        <path d="M13.5 16.748c0 0-0.711 0.361-1.075 0.182-0.362-0.184-0.434-0.541-0.229-1.152l0.406-1.221c0.403-1.221-0.121-2.076-1.082-2.131-1.258-0.070-2.020 0.826-2.020 0.826s0.71-0.365 1.075-0.182c0.362 0.184 0.432 0.541 0.229 1.152l-0.406 1.221c-0.405 1.221 0.119 2.074 1.082 2.131 1.258 0.071 2.020-0.826 2.020-0.826z" />
        <path d="M13.301 10c0 0.719-0.582 1.301-1.301 1.301s-1.301-0.582-1.301-1.301c0-0.719 0.582-1.301 1.301-1.301s1.301 0.582 1.301 1.301z" />
      </g>
    </svg>
  ),
  networkErr: ({ ...props }) => (
    <svg viewBox="0 0 24 30" {...props}>
      <g>
        <g>
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <path d="M18.5,24c-3.032,0-5.5-2.467-5.5-5.5s2.468-5.5,5.5-5.5s5.5,2.467,5.5,5.5S21.532,24,18.5,24z M18.5,14         c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,14,18.5,14z" />
                  </g>
                </g>
                <g>
                  <path d="M18.5,20c-0.276,0-0.5-0.224-0.5-0.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4C19,19.776,18.776,20,18.5,20z        " />
                </g>
                <g>
                  <path d="M18.5,22c-0.13,0-0.26-0.05-0.351-0.15C18.05,21.75,18,21.63,18,21.5c0-0.13,0.05-0.26,0.14-0.35        c0.2-0.19,0.53-0.19,0.71,0C18.95,21.24,19,21.37,19,21.5c0,0.13-0.05,0.26-0.141,0.35C18.76,21.95,18.63,22,18.5,22z" />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g>
          <g>
            <path d="M11.5,23C5.159,23,0,17.841,0,11.5S5.159,0,11.5,0S23,5.159,23,11.5c0,0.4-0.023,0.813-0.072,1.262     c-0.029,0.275-0.277,0.475-0.551,0.443c-0.274-0.03-0.473-0.276-0.443-0.551C21.975,12.275,22,11.891,22,11.5     C22,5.71,17.29,1,11.5,1S1,5.71,1,11.5S5.71,22,11.5,22c0.39,0,0.774-0.025,1.153-0.066c0.27-0.03,0.521,0.167,0.552,0.443     c0.03,0.274-0.168,0.521-0.442,0.551C12.317,22.977,11.904,23,11.5,23z" />
          </g>
          <g>
            <path d="M11.5,23C7.855,23,5,17.949,5,11.5S7.855,0,11.5,0S18,5.051,18,11.5c0,0.276-0.224,0.5-0.5,0.5S17,11.776,17,11.5     C17,5.809,14.481,1,11.5,1S6,5.809,6,11.5S8.519,22,11.5,22c0.276,0,0.5,0.224,0.5,0.5S11.776,23,11.5,23z" />
          </g>
          <g>
            <path d="M11.5,23c-0.276,0-0.5-0.224-0.5-0.5v-22C11,0.224,11.224,0,11.5,0S12,0.224,12,0.5v22C12,22.776,11.776,23,11.5,23z" />
          </g>
          <g>
            <path d="M22.5,12h-22C0.224,12,0,11.776,0,11.5S0.224,11,0.5,11h22c0.276,0,0.5,0.224,0.5,0.5S22.776,12,22.5,12z" />
          </g>
          <g>
            <path d="M20.5,6h-18C2.224,6,2,5.776,2,5.5S2.224,5,2.5,5h18C20.776,5,21,5.224,21,5.5S20.776,6,20.5,6z" />
          </g>
          <g>
            <path d="M11.5,18h-9C2.224,18,2,17.776,2,17.5S2.224,17,2.5,17h9c0.276,0,0.5,0.224,0.5,0.5S11.776,18,11.5,18z" />
          </g>
        </g>
      </g>
    </svg>
  ),
  introArrow: ({ ...props }) => (
    <svg viewBox="0 0 92 177" {...props} fill="none">
      <title>{props.title}</title>
      <path d="M0.5 175.5C0.5 175.5 80 148 80 3.5" strokeWidth="2" />
      <path d="M68 15.5L80 2.5L90.5 15.5" strokeWidth="2" />
    </svg>
  ),
  thumbsUp: ({ ...props }) => (
    <svg viewBox="0 2 20 20" {...props}>
      <title>{props.title}</title>
      <path d="M13.648 7.362c-0.133-0.355 3.539-3.634 1.398-6.291-0.501-0.621-2.201 2.975-4.615 4.603-1.332 0.898-4.431 2.81-4.431 3.867v6.842c0 1.271 4.914 2.617 8.648 2.617 1.369 0 3.352-8.576 3.352-9.938 0-1.368-4.221-1.344-4.352-1.7zM5 7.457c-0.658 0-3 0.4-3 3.123v4.848c0 2.721 2.342 3.021 3 3.021 0.657 0-1-0.572-1-2.26v-6.373c0-1.768 1.657-2.359 1-2.359z" />
    </svg>
  ),
  readOnly: ({ ...props }) => (
    <svg viewBox="0 0 24 24" {...props}>
      <title>{props.title}</title>
      <path d="M2.016 5.016l1.969-2.016 16.031 15.984-2.016 2.016-5.625-5.625-5.625 5.625h-3.75v-3.75l5.625-5.625zM20.719 5.625q0.281 0.281 0.281 0.703 0 0.375-0.281 0.656l-1.828 1.875-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281zM12.141 8.109l1.922-1.922 3.75 3.75-1.922 1.922z" />
    </svg>
  )
};

const Icon = memo(
  React.forwardRef((props, ref) => {
    const { name, ...others } = props;
    return icons[name](others, ref);
  // eslint-disable-next-line max-len
  }, (prevProps, newProps) => prevProps.name === newProps.name && prevProps.width === newProps.width && prevProps.className === newProps.className)
);

export default Icon;
