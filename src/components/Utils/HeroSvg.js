import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";


const PathVarients = {
  visible: {
    x: -15,
    transition: {
      repeat: Infinity,
      duration: 1
    }
  },
};


const HeroSvg = ({ color }) => {
  return (
    <>
      <LazyLoadImage alt="mobile" src="images/purbisdashboard.png" className="main-image img-fluid" />
      {/* <div className="circle-svg">
                  <svg
                    width={616}
                    height={552}
                    viewBox="0 0 616 552"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M460.916 486.834C460.916 486.448 461.07 486.077 461.343 485.803C461.617 485.53 461.988 485.376 462.374 485.376H476.958C477.344 485.376 477.715 485.53 477.989 485.803C478.262 486.077 478.416 486.448 478.416 486.834V511.626H462.374C461.988 511.626 461.617 511.472 461.343 511.199C461.07 510.925 460.916 510.554 460.916 510.168V486.834Z"
                      stroke="#91E2BE"
                      strokeOpacity={1}
                      strokeWidth={2}
                      strokeLinejoin="round"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M473.311 511.626V505.063C473.311 504.483 473.081 503.927 472.67 503.517C472.26 503.106 471.704 502.876 471.124 502.876H468.207C467.627 502.876 467.07 503.106 466.66 503.517C466.25 503.927 466.02 504.483 466.02 505.063V511.626M478.415 498.501H488.624C489.01 498.501 489.381 498.655 489.655 498.928C489.928 499.202 490.082 499.573 490.082 499.959V510.168C490.082 510.554 489.928 510.925 489.655 511.199C489.381 511.472 489.01 511.626 488.624 511.626H478.415V498.501Z"
                      stroke="#91E2BE"
                      strokeOpacity={1}
                      strokeWidth={2}
                      strokeLinejoin="round"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M466.749 494.126H472.583M482.791 502.876H485.708M482.791 507.251H485.708M469.666 491.209V497.043M463.104 511.626H476.229"
                      stroke="#91E2BE"
                      strokeOpacity={1}
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M127.25 27.476C127.25 28.176 127.812 28.7385 128.513 28.7385H144.75C145.45 28.7385 146.013 28.176 146.013 27.476V26.251H127.25V27.476Z"
                      fill="#FFC7C7"
                      fillOpacity="0.84"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      opacity={1}
                      d="M136.625 13.7383C134.85 13.7383 131.913 14.3133 130.525 16.2508H142.738C141.338 14.3133 138.4 13.7383 136.625 13.7383Z"
                      fill="#FFC7C7"
                      fillOpacity={1}
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M136.625 11.2385C131.938 11.2385 127.25 13.751 127.25 18.751H146C146 13.751 141.312 11.2385 136.625 11.2385ZM130.525 16.251C131.912 14.3135 134.863 13.7385 136.625 13.7385C138.387 13.7385 141.338 14.3135 142.725 16.251H130.525ZM127.25 21.251H146V23.751H127.25V21.251ZM148.5 6.25098V1.25098H146V6.25098H139.75L140.037 8.75098H151.988L150.237 26.251H148.5V28.751H150.65C151.7 28.751 152.562 27.9385 152.688 26.9135L154.75 6.25098H148.5Z"
                      fill="#FFC7C7"
                      fillOpacity={1}
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M79 353.251L80.25 350.751V344.323C82.4012 343.765 84 341.823 84 339.501C84 336.743 81.7575 334.501 79 334.501C76.2425 334.501 74 336.743 74 339.501C74 341.823 75.5988 343.765 77.75 344.323V350.751L79 353.251ZM76.5 339.501C76.5 338.122 77.6212 337.001 79 337.001C80.3787 337.001 81.5 338.122 81.5 339.501C81.5 340.88 80.3787 342.001 79 342.001C77.6212 342.001 76.5 340.88 76.5 339.501Z"
                      fill="#C1D3FA"
                      fillOpacity={1}
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M84.3337 345.205L83.6675 347.615C86.9062 348.51 89 350.231 89 352.001C89 354.366 84.8937 357.001 79 357.001C73.1062 357.001 69 354.366 69 352.001C69 350.231 71.0938 348.51 74.3338 347.614L73.6675 345.204C69.2463 346.426 66.5 349.03 66.5 352.001C66.5 356.206 71.9913 359.501 79 359.501C86.0087 359.501 91.5 356.206 91.5 352.001C91.5 349.03 88.7537 346.426 84.3337 345.205Z"
                      fill="#C1D3FA"
                      fillOpacity={1}
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M582.581 96.8024L582.765 79.9572L599.359 98.3184L582.581 96.8024Z"
                      fill="#91E2BE"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M601.43 94.725L586.385 93.3656L586.55 78.2602L601.43 94.725Z"
                      stroke="#91E2BE"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M121.747 469.958L123.676 490.93L100.687 470.221L121.747 469.958Z"
                      fill="#C1D3FA"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M98.2509 474.834L117.571 474.593L119.34 493.833L98.2509 474.834Z"
                      stroke="#C1D3FA"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M380.766 10.1306C381.095 11.4609 381.159 12.843 380.954 14.198C380.749 15.553 380.279 16.8543 379.571 18.0276C378.863 19.201 377.93 20.2234 376.827 21.0364C375.724 21.8495 374.471 22.4373 373.141 22.7663C371.811 23.0953 370.429 23.159 369.074 22.9539C367.719 22.7488 366.417 22.2787 365.244 21.5707C364.071 20.8626 363.048 19.9304 362.235 18.8272C361.422 17.724 360.834 16.4715 360.505 15.1412L370.636 12.6359L380.766 10.1306Z"
                      fill="#C1D3FA"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <circle
                      cx="370.636"
                      cy="12.6359"
                      r="9.93562"
                      transform="rotate(-13.8908 370.636 12.6359)"
                      stroke="#C1D3FA"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.path
                      d="M295.766 536.131C296.095 537.461 296.159 538.843 295.954 540.198C295.749 541.553 295.279 542.854 294.571 544.028C293.863 545.201 292.93 546.223 291.827 547.036C290.724 547.849 289.471 548.437 288.141 548.766C286.811 549.095 285.429 549.159 284.074 548.954C282.719 548.749 281.417 548.279 280.244 547.571C279.071 546.863 278.048 545.93 277.235 544.827C276.422 543.724 275.834 542.472 275.505 541.141L285.636 538.636L295.766 536.131Z"
                      fill="#91E2BE"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <circle
                      cx="285.636"
                      cy="538.636"
                      r="9.93562"
                      transform="rotate(-13.8908 285.636 538.636)"
                      stroke="#91E2BE"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <mask id="path-17-inside-1_325_860" fill="white">
                      <motion.path d="M600.579 383.601C598.966 384.948 597.104 385.964 595.099 386.592C593.094 387.219 590.984 387.445 588.892 387.258C586.799 387.07 584.764 386.472 582.902 385.498C581.04 384.524 579.389 383.192 578.042 381.58C576.695 379.967 575.678 378.105 575.051 376.1C574.423 374.095 574.197 371.985 574.385 369.893C574.572 367.8 575.17 365.765 576.145 363.903C577.119 362.041 578.45 360.39 580.063 359.043L582.687 362.184C581.487 363.187 580.496 364.416 579.771 365.801C579.046 367.186 578.601 368.701 578.462 370.258C578.322 371.816 578.491 373.385 578.958 374.877C579.424 376.37 580.181 377.755 581.183 378.955C582.186 380.155 583.415 381.146 584.8 381.871C586.185 382.596 587.7 383.041 589.257 383.181C590.815 383.32 592.384 383.152 593.876 382.685C595.369 382.218 596.754 381.462 597.954 380.459L600.579 383.601Z"
                      animate="visible"
                      variants={PathVarients}
                       />
                    </mask>
                    <motion.path
                      d="M600.579 383.601C598.966 384.948 597.104 385.964 595.099 386.592C593.094 387.219 590.984 387.445 588.892 387.258C586.799 387.07 584.764 386.472 582.902 385.498C581.04 384.524 579.389 383.192 578.042 381.58C576.695 379.967 575.678 378.105 575.051 376.1C574.423 374.095 574.197 371.985 574.385 369.893C574.572 367.8 575.17 365.765 576.145 363.903C577.119 362.041 578.45 360.39 580.063 359.043L582.687 362.184C581.487 363.187 580.496 364.416 579.771 365.801C579.046 367.186 578.601 368.701 578.462 370.258C578.322 371.816 578.491 373.385 578.958 374.877C579.424 376.37 580.181 377.755 581.183 378.955C582.186 380.155 583.415 381.146 584.8 381.871C586.185 382.596 587.7 383.041 589.257 383.181C590.815 383.32 592.384 383.152 593.876 382.685C595.369 382.218 596.754 381.462 597.954 380.459L600.579 383.601Z"
                      stroke="#91E2BE"
                      strokeWidth={8}
                      mask="url(#path-17-inside-1_325_860)"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <mask id="path-18-inside-2_325_860" fill="white">
                      <motion.path d="M602.648 373.164C601.938 376.051 600.111 378.537 597.568 380.076C595.025 381.615 591.975 382.081 589.089 381.371C586.202 380.661 583.716 378.834 582.177 376.291C580.638 373.748 580.172 370.698 580.882 367.811L581.551 367.976C580.885 370.685 581.322 373.547 582.767 375.934C584.211 378.32 586.544 380.035 589.253 380.702C591.962 381.368 594.825 380.931 597.211 379.486C599.598 378.042 601.313 375.709 601.979 373L602.648 373.164Z"
                      animate="visible"
                      variants={PathVarients}
                       />
                    </mask>
                    <motion.path
                      d="M602.648 373.164C601.938 376.051 600.111 378.537 597.568 380.076C595.025 381.615 591.975 382.081 589.089 381.371C586.202 380.661 583.716 378.834 582.177 376.291C580.638 373.748 580.172 370.698 580.882 367.811L581.551 367.976C580.885 370.685 581.322 373.547 582.767 375.934C584.211 378.32 586.544 380.035 589.253 380.702C591.962 381.368 594.825 380.931 597.211 379.486C599.598 378.042 601.313 375.709 601.979 373L602.648 373.164Z"
                      stroke="#91E2BE"
                      strokeWidth={2}
                      mask="url(#path-18-inside-2_325_860)"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <mask id="path-19-inside-3_325_860" fill="white">
                      <motion.path d="M18.5705 223.139C19.6451 221.334 21.0647 219.758 22.7485 218.501C24.4322 217.244 26.347 216.331 28.3836 215.814C30.4201 215.297 32.5386 215.186 34.6179 215.488C36.6973 215.79 38.6969 216.498 40.5025 217.573C42.3081 218.647 43.8843 220.067 45.1413 221.751C46.3982 223.434 47.3112 225.349 47.8281 227.386C48.3451 229.422 48.4558 231.541 48.154 233.62C47.8522 235.699 47.1438 237.699 46.0693 239.505L42.5516 237.411C43.3513 236.067 43.8784 234.579 44.103 233.032C44.3276 231.485 44.2452 229.908 43.8605 228.393C43.4758 226.877 42.7964 225.452 41.861 224.199C40.9257 222.946 39.7527 221.89 38.409 221.09C37.0654 220.291 35.5774 219.763 34.03 219.539C32.4826 219.314 30.9062 219.397 29.3906 219.781C27.8751 220.166 26.4502 220.845 25.1972 221.781C23.9443 222.716 22.8878 223.889 22.0882 225.233L18.5705 223.139Z"
                      animate="visible"
                      variants={PathVarients}
                       />
                    </mask>
                    <motion.path
                      d="M18.5705 223.139C19.6451 221.334 21.0647 219.758 22.7485 218.501C24.4322 217.244 26.347 216.331 28.3836 215.814C30.4201 215.297 32.5386 215.186 34.6179 215.488C36.6973 215.79 38.6969 216.498 40.5025 217.573C42.3081 218.647 43.8843 220.067 45.1413 221.751C46.3982 223.434 47.3112 225.349 47.8281 227.386C48.3451 229.422 48.4558 231.541 48.154 233.62C47.8522 235.699 47.1438 237.699 46.0693 239.505L42.5516 237.411C43.3513 236.067 43.8784 234.579 44.103 233.032C44.3276 231.485 44.2452 229.908 43.8605 228.393C43.4758 226.877 42.7964 225.452 41.861 224.199C40.9257 222.946 39.7527 221.89 38.409 221.09C37.0654 220.291 35.5774 219.763 34.03 219.539C32.4826 219.314 30.9062 219.397 29.3906 219.781C27.8751 220.166 26.4502 220.845 25.1972 221.781C23.9443 222.716 22.8878 223.889 22.0882 225.233L18.5705 223.139Z"
                      stroke="#C1D3FA"
                      strokeWidth={8}
                      mask="url(#path-19-inside-3_325_860)"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <mask id="path-20-inside-4_325_860" fill="white">
                      <motion.path d="M20.0772 233.672C19.7897 230.714 20.6893 227.762 22.578 225.467C24.4667 223.172 27.1898 221.721 30.1482 221.433C33.1067 221.146 36.0581 222.045 38.3533 223.934C40.6485 225.823 42.0994 228.546 42.3869 231.504L41.7008 231.571C41.431 228.794 40.0694 226.239 37.9153 224.466C35.7613 222.694 32.9914 221.85 30.2149 222.119C27.4384 222.389 24.8828 223.751 23.1102 225.905C21.3377 228.059 20.4935 230.829 20.7632 233.605L20.0772 233.672Z"
                      animate="visible"
                      variants={PathVarients}
                       />
                    </mask>
                    <motion.path
                      d="M20.0772 233.672C19.7897 230.714 20.6893 227.762 22.578 225.467C24.4667 223.172 27.1898 221.721 30.1482 221.433C33.1067 221.146 36.0581 222.045 38.3533 223.934C40.6485 225.823 42.0994 228.546 42.3869 231.504L41.7008 231.571C41.431 228.794 40.0694 226.239 37.9153 224.466C35.7613 222.694 32.9914 221.85 30.2149 222.119C27.4384 222.389 24.8828 223.751 23.1102 225.905C21.3377 228.059 20.4935 230.829 20.7632 233.605L20.0772 233.672Z"
                      stroke="#C1D3FA"
                      strokeWidth={2}
                      mask="url(#path-20-inside-4_325_860)"
                      animate="visible"
                      variants={PathVarients}
                    />
                    <motion.circle
                      className="rotate-circle"
                      cx={284}
                      cy="266.001"
                      r="176.5"
                      stroke="#d7d7da"
                      strokeDasharray="12 12"
                      strokeOpacity={1}
                      animate={{ rotate: 180}}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                    <motion.circle
                      className="rotate-circle"
                      cx={284}
                      cy="263.001"
                      r="157.5"
                      stroke="#d7d7da"
                      strokeDasharray="12 12"
                      strokeOpacity={1}
                      animate={{ rotate: 180,}}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                    <motion.circle
                      className="rotate-circle"
                      cx="282.5"
                      cy="264.501"
                      r={131}
                      stroke="#d7d7da"
                      strokeDasharray="12 12"
                      strokeOpacity={1}
                      animate={{ rotate: 180 }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <motion.path
                      d="M513.061 162.725C506.612 162.851 501.499 168.169 501.625 174.618C501.796 183.366 513.713 196.052 513.713 196.052C513.713 196.052 525.125 182.91 524.954 174.161C524.827 167.712 519.51 162.599 513.061 162.725ZM504.958 174.553C504.868 169.954 508.527 166.148 513.126 166.058C517.725 165.968 521.531 169.627 521.621 174.227C521.715 179.026 517.057 186.302 513.612 190.853C510.059 186.472 505.051 179.302 504.958 174.553Z"
                      fill="#91E2BE"
                      fillOpacity={1}
                      variants={PathVarients}
                      animate="visible"
                    />
                    <motion.path
                      d="M513.372 178.556C515.673 178.511 517.501 176.609 517.456 174.308C517.411 172.008 515.51 170.179 513.209 170.224C510.908 170.269 509.079 172.171 509.125 174.472C509.17 176.772 511.071 178.601 513.372 178.556Z"
                      fill="#91E2BE"
                      fillOpacity={1}
                      variants={PathVarients}
                      animate="visible"
                    />
                    <motion.circle
                      className="rotate-circle"
                      cx={288}
                      cy="263.001"
                      r="262.5"
                      stroke="#d7d7da"
                      strokeOpacity={1}
                      strokeDasharray="12 12"
                      animate={{ rotate: 180 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                  </svg>
                </div> */}
    </>
  );
};

export default HeroSvg;
