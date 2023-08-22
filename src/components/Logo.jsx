export function Logo(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <g>
        <path d="M42.053 47.6701H5.97299C2.96249 47.6701 0.479492 45.2091 0.479492 42.1766V6.07455C0.479492 3.06405 2.94049 0.581055 5.97299 0.581055H42.075C45.0855 0.581055 47.5685 3.04205 47.5685 6.07455V42.1766C47.5465 45.1871 45.0855 47.6701 42.053 47.6701Z" fill="black"/>
        <g>
          <mask id={`${props.place}-mask1_4877_4344`} style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="43" height="43">
            <path d="M20.2115 15.1276H27.507L42.053 0.581055H5.97299C2.96249 0.581055 0.479492 3.04205 0.479492 6.07455V42.1766L20.2115 22.4226V15.1276Z" fill="white"/>
          </mask>
          <g mask={`url(#${props.place}-mask1_4877_4344)`}>
            <path d="M0.479492 0.581055V42.1766H42.053V0.581055H0.479492Z" fill={`url(#${props.place}-paint0_linear_4877_4344`} />
          </g>
        </g>
        <path d="M7.59901 15.2375L8.23601 13.963C8.32401 13.721 8.56601 13.677 8.78551 13.787C8.78551 13.787 9.86201 14.3585 10.939 14.3585C11.4225 14.3585 11.752 14.1605 11.752 13.765C11.752 13.3475 11.4225 13.084 10.17 12.5785C8.34601 11.8755 7.48901 10.8865 7.48901 9.45848C7.48901 8.00798 8.56601 6.66748 10.983 6.66748C12.389 6.66748 13.4 7.06298 13.9055 7.39298C14.125 7.52448 14.235 7.78848 14.125 8.02998L13.5315 9.23848C13.422 9.45848 13.158 9.48048 12.9605 9.41448C12.9605 9.41448 11.8835 8.90898 11.005 8.90898C10.4335 8.90898 10.192 9.15048 10.192 9.45848C10.192 9.87598 10.6095 10.0295 11.488 10.381C13.312 11.0845 14.6965 11.8755 14.6965 13.721C14.6965 15.2815 13.312 16.6215 10.939 16.6215C9.37901 16.6215 8.28001 16.116 7.79651 15.7425C7.59901 15.611 7.48901 15.413 7.59901 15.2375Z" fill="white"/>
        <path d="M16.5859 12.2931C16.5859 11.9416 16.8714 11.6116 17.2669 11.6116H25.4634C29.7259 11.6116 32.9999 14.4686 32.9999 18.2256C32.9999 20.9726 30.7369 23.1256 29.0669 23.9171C30.9564 24.5321 33.7249 26.4656 33.7249 29.7396C33.7249 33.7391 30.2974 36.6396 25.9244 36.6396H17.2669C16.8714 36.6396 16.5859 36.3096 16.5859 35.9581V12.2931ZM25.0239 22.1151C26.8474 22.1151 28.0999 20.6866 28.0999 18.9071C28.0999 17.1271 26.8474 15.8746 25.0239 15.8746H21.2004V22.1371H25.0239V22.1151ZM25.5289 32.4206C27.3089 32.4206 28.7374 31.0361 28.7374 29.1686C28.7374 27.3886 26.9574 26.0481 25.0894 26.0481H21.2004V32.4206H25.5289Z" fill="white"/>
      </g>

      <defs>
        <linearGradient id={`${props.place}-paint0_linear_4877_4344`} x1="0.479573" y1="21.373" x2="42.0531" y2="21.373" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ED693C"/>
          <stop offset="0.0078125" stopColor="#ED693C"/>
          <stop offset="0.015625" stopColor="#ED6A3B"/>
          <stop offset="0.0234375" stopColor="#ED6B3B"/>
          <stop offset="0.03125" stopColor="#ED6C3A"/>
          <stop offset="0.0390625" stopColor="#EE6D3A"/>
          <stop offset="0.046875" stopColor="#EE6D3A"/>
          <stop offset="0.0546875" stopColor="#EE6E39"/>
          <stop offset="0.0625" stopColor="#EE6F39"/>
          <stop offset="0.0703125" stopColor="#EE7038"/>
          <stop offset="0.078125" stopColor="#EE7138"/>
          <stop offset="0.0859375" stopColor="#EE7237"/>
          <stop offset="0.09375" stopColor="#EE7237"/>
          <stop offset="0.101563" stopColor="#EF7337"/>
          <stop offset="0.109375" stopColor="#EF7436"/>
          <stop offset="0.117188" stopColor="#EF7536"/>
          <stop offset="0.125" stopColor="#EF7635"/>
          <stop offset="0.132812" stopColor="#EF7635"/>
          <stop offset="0.140625" stopColor="#EF7735"/>
          <stop offset="0.148438" stopColor="#EF7834"/>
          <stop offset="0.15625" stopColor="#F07934"/>
          <stop offset="0.164063" stopColor="#F07A33"/>
          <stop offset="0.171875" stopColor="#F07A33"/>
          <stop offset="0.179688" stopColor="#F07B32"/>
          <stop offset="0.1875" stopColor="#F07C32"/>
          <stop offset="0.195313" stopColor="#F07D32"/>
          <stop offset="0.203125" stopColor="#F07E31"/>
          <stop offset="0.210938" stopColor="#F17E31"/>
          <stop offset="0.21875" stopColor="#F17F30"/>
          <stop offset="0.226563" stopColor="#F18030"/>
          <stop offset="0.234375" stopColor="#F1812F"/>
          <stop offset="0.242188" stopColor="#F1822F"/>
          <stop offset="0.25" stopColor="#F1822F"/>
          <stop offset="0.257813" stopColor="#F1832E"/>
          <stop offset="0.265625" stopColor="#F2842E"/>
          <stop offset="0.273438" stopColor="#F2852D"/>
          <stop offset="0.28125" stopColor="#F2862D"/>
          <stop offset="0.289063" stopColor="#F2862C"/>
          <stop offset="0.296875" stopColor="#F2872C"/>
          <stop offset="0.304688" stopColor="#F2882C"/>
          <stop offset="0.3125" stopColor="#F2892B"/>
          <stop offset="0.320312" stopColor="#F38A2B"/>
          <stop offset="0.328125" stopColor="#F38A2A"/>
          <stop offset="0.335938" stopColor="#F38B2A"/>
          <stop offset="0.34375" stopColor="#F38C2A"/>
          <stop offset="0.351563" stopColor="#F38D29"/>
          <stop offset="0.359375" stopColor="#F38E29"/>
          <stop offset="0.367188" stopColor="#F38E28"/>
          <stop offset="0.375" stopColor="#F38F28"/>
          <stop offset="0.382813" stopColor="#F49027"/>
          <stop offset="0.390625" stopColor="#F49127"/>
          <stop offset="0.398438" stopColor="#F49227"/>
          <stop offset="0.40625" stopColor="#F49226"/>
          <stop offset="0.414063" stopColor="#F49326"/>
          <stop offset="0.421875" stopColor="#F49425"/>
          <stop offset="0.429688" stopColor="#F49525"/>
          <stop offset="0.4375" stopColor="#F59624"/>
          <stop offset="0.445312" stopColor="#F59624"/>
          <stop offset="0.453125" stopColor="#F59724"/>
          <stop offset="0.460938" stopColor="#F59823"/>
          <stop offset="0.46875" stopColor="#F59923"/>
          <stop offset="0.476563" stopColor="#F59A22"/>
          <stop offset="0.484375" stopColor="#F59A22"/>
          <stop offset="0.492188" stopColor="#F69B21"/>
          <stop offset="0.5" stopColor="#F69C21"/>
          <stop offset="0.507812" stopColor="#F69D21"/>
          <stop offset="0.515625" stopColor="#F69E20"/>
          <stop offset="0.523438" stopColor="#F69E20"/>
          <stop offset="0.53125" stopColor="#F69F1F"/>
          <stop offset="0.539062" stopColor="#F6A01F"/>
          <stop offset="0.546875" stopColor="#F7A11F"/>
          <stop offset="0.554688" stopColor="#F7A21E"/>
          <stop offset="0.5625" stopColor="#F7A21E"/>
          <stop offset="0.570313" stopColor="#F7A31D"/>
          <stop offset="0.578125" stopColor="#F7A41D"/>
          <stop offset="0.585938" stopColor="#F7A51C"/>
          <stop offset="0.59375" stopColor="#F7A61C"/>
          <stop offset="0.601563" stopColor="#F8A61C"/>
          <stop offset="0.609375" stopColor="#F8A71B"/>
          <stop offset="0.617188" stopColor="#F8A81B"/>
          <stop offset="0.625" stopColor="#F8A91A"/>
          <stop offset="0.632812" stopColor="#F8AA1A"/>
          <stop offset="0.640625" stopColor="#F8AA19"/>
          <stop offset="0.648437" stopColor="#F8AB19"/>
          <stop offset="0.65625" stopColor="#F8AC19"/>
          <stop offset="0.664062" stopColor="#F9AD18"/>
          <stop offset="0.671875" stopColor="#F9AE18"/>
          <stop offset="0.679687" stopColor="#F9AE17"/>
          <stop offset="0.6875" stopColor="#F9AF17"/>
          <stop offset="0.695312" stopColor="#F9B016"/>
          <stop offset="0.703125" stopColor="#F9B116"/>
          <stop offset="0.710938" stopColor="#F9B216"/>
          <stop offset="0.71875" stopColor="#FAB215"/>
          <stop offset="0.726562" stopColor="#FAB315"/>
          <stop offset="0.734375" stopColor="#FAB414"/>
          <stop offset="0.742188" stopColor="#FAB514"/>
          <stop offset="0.75" stopColor="#FAB614"/>
          <stop offset="0.757812" stopColor="#FAB613"/>
          <stop offset="0.765625" stopColor="#FAB713"/>
          <stop offset="0.773438" stopColor="#FBB812"/>
          <stop offset="0.78125" stopColor="#FBB912"/>
          <stop offset="0.789062" stopColor="#FBBA11"/>
          <stop offset="0.796875" stopColor="#FBBA11"/>
          <stop offset="0.804688" stopColor="#FBBB11"/>
          <stop offset="0.8125" stopColor="#FBBC10"/>
          <stop offset="0.820313" stopColor="#FBBD10"/>
          <stop offset="0.828125" stopColor="#FCBE0F"/>
          <stop offset="0.835938" stopColor="#FCBE0F"/>
          <stop offset="0.84375" stopColor="#FCBF0E"/>
          <stop offset="0.851563" stopColor="#FCC00E"/>
          <stop offset="0.859375" stopColor="#FCC10E"/>
          <stop offset="0.867188" stopColor="#FCC20D"/>
          <stop offset="0.875" stopColor="#FCC20D"/>
          <stop offset="0.882812" stopColor="#FDC30C"/>
          <stop offset="0.890625" stopColor="#FDC40C"/>
          <stop offset="0.898437" stopColor="#FDC50B"/>
          <stop offset="0.90625" stopColor="#FDC60B"/>
          <stop offset="0.9375" stopColor="#FDC60B"/>
          <stop offset="1" stopColor="#FDC60B"/>
        </linearGradient>
      </defs>
    </svg>
  )
}


