import SE from '../../components/simulation_element/se';
import dosagem from '@/chemical_components/dosagem.svg';
import DosagemMassBalance from './dosagem_mass_balance';
import { Box } from '@chakra-ui/react';

const DosagemDimensionElement: React.FC = () => {
  return (
    <Box my={2}>
      <svg width="100%" height="241" viewBox="0 0 311 241" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M98.6957 238.096C98.0557 238.096 97.4637 237.992 96.9197 237.784C96.3837 237.568 95.9157 237.268 95.5157 236.884C95.1237 236.492 94.8157 236.036 94.5917 235.516C94.3677 234.996 94.2557 234.424 94.2557 233.8C94.2557 233.176 94.3677 232.604 94.5917 232.084C94.8157 231.564 95.1277 231.112 95.5277 230.728C95.9277 230.336 96.3957 230.036 96.9317 229.828C97.4757 229.612 98.0677 229.504 98.7077 229.504C99.3557 229.504 99.9517 229.616 100.496 229.84C101.048 230.056 101.516 230.38 101.9 230.812L101.12 231.568C100.8 231.232 100.44 230.984 100.04 230.824C99.6397 230.656 99.2117 230.572 98.7557 230.572C98.2837 230.572 97.8437 230.652 97.4357 230.812C97.0357 230.972 96.6877 231.196 96.3917 231.484C96.0957 231.772 95.8637 232.116 95.6957 232.516C95.5357 232.908 95.4557 233.336 95.4557 233.8C95.4557 234.264 95.5357 234.696 95.6957 235.096C95.8637 235.488 96.0957 235.828 96.3917 236.116C96.6877 236.404 97.0357 236.628 97.4357 236.788C97.8437 236.948 98.2837 237.028 98.7557 237.028C99.2117 237.028 99.6397 236.948 100.04 236.788C100.44 236.62 100.8 236.364 101.12 236.02L101.9 236.776C101.516 237.208 101.048 237.536 100.496 237.76C99.9517 237.984 99.3517 238.096 98.6957 238.096ZM105.898 238.072C105.258 238.072 104.69 237.932 104.194 237.652C103.698 237.372 103.306 236.988 103.018 236.5C102.73 236.004 102.586 235.444 102.586 234.82C102.586 234.188 102.73 233.628 103.018 233.14C103.306 232.652 103.698 232.272 104.194 232C104.69 231.72 105.258 231.58 105.898 231.58C106.53 231.58 107.094 231.72 107.59 232C108.094 232.272 108.486 232.652 108.766 233.14C109.054 233.62 109.198 234.18 109.198 234.82C109.198 235.452 109.054 236.012 108.766 236.5C108.486 236.988 108.094 237.372 107.59 237.652C107.094 237.932 106.53 238.072 105.898 238.072ZM105.898 237.064C106.306 237.064 106.67 236.972 106.99 236.788C107.318 236.604 107.574 236.344 107.758 236.008C107.942 235.664 108.034 235.268 108.034 234.82C108.034 234.364 107.942 233.972 107.758 233.644C107.574 233.308 107.318 233.048 106.99 232.864C106.67 232.68 106.306 232.588 105.898 232.588C105.49 232.588 105.126 232.68 104.806 232.864C104.486 233.048 104.23 233.308 104.038 233.644C103.846 233.972 103.75 234.364 103.75 234.82C103.75 235.268 103.846 235.664 104.038 236.008C104.23 236.344 104.486 236.604 104.806 236.788C105.126 236.972 105.49 237.064 105.898 237.064ZM118.747 231.58C119.259 231.58 119.711 231.68 120.103 231.88C120.495 232.08 120.799 232.384 121.015 232.792C121.239 233.2 121.351 233.716 121.351 234.34V238H120.199V234.472C120.199 233.856 120.055 233.392 119.767 233.08C119.479 232.768 119.075 232.612 118.555 232.612C118.171 232.612 117.835 232.692 117.547 232.852C117.259 233.012 117.035 233.248 116.875 233.56C116.723 233.872 116.647 234.26 116.647 234.724V238H115.495V234.472C115.495 233.856 115.351 233.392 115.063 233.08C114.783 232.768 114.379 232.612 113.851 232.612C113.475 232.612 113.143 232.692 112.855 232.852C112.567 233.012 112.343 233.248 112.183 233.56C112.023 233.872 111.943 234.26 111.943 234.724V238H110.791V231.64H111.895V233.332L111.715 232.9C111.915 232.484 112.223 232.16 112.639 231.928C113.055 231.696 113.539 231.58 114.091 231.58C114.699 231.58 115.223 231.732 115.663 232.036C116.103 232.332 116.391 232.784 116.527 233.392L116.059 233.2C116.251 232.712 116.587 232.32 117.067 232.024C117.547 231.728 118.107 231.58 118.747 231.58ZM126.843 238.072C126.315 238.072 125.831 237.952 125.391 237.712C124.959 237.464 124.611 237.1 124.347 236.62C124.091 236.14 123.963 235.54 123.963 234.82C123.963 234.1 124.087 233.5 124.335 233.02C124.591 232.54 124.935 232.18 125.367 231.94C125.807 231.7 126.299 231.58 126.843 231.58C127.467 231.58 128.019 231.716 128.499 231.988C128.979 232.26 129.359 232.64 129.639 233.128C129.919 233.608 130.059 234.172 130.059 234.82C130.059 235.468 129.919 236.036 129.639 236.524C129.359 237.012 128.979 237.392 128.499 237.664C128.019 237.936 127.467 238.072 126.843 238.072ZM123.471 240.328V231.64H124.575V233.356L124.503 234.832L124.623 236.308V240.328H123.471ZM126.747 237.064C127.155 237.064 127.519 236.972 127.839 236.788C128.167 236.604 128.423 236.344 128.607 236.008C128.799 235.664 128.895 235.268 128.895 234.82C128.895 234.364 128.799 233.972 128.607 233.644C128.423 233.308 128.167 233.048 127.839 232.864C127.519 232.68 127.155 232.588 126.747 232.588C126.347 232.588 125.983 232.68 125.655 232.864C125.335 233.048 125.079 233.308 124.887 233.644C124.703 233.972 124.611 234.364 124.611 234.82C124.611 235.268 124.703 235.664 124.887 236.008C125.079 236.344 125.335 236.604 125.655 236.788C125.983 236.972 126.347 237.064 126.747 237.064ZM131.651 238V231.64H132.755V233.368L132.647 232.936C132.823 232.496 133.119 232.16 133.535 231.928C133.951 231.696 134.463 231.58 135.071 231.58V232.696C135.023 232.688 134.975 232.684 134.927 232.684C134.887 232.684 134.847 232.684 134.807 232.684C134.191 232.684 133.703 232.868 133.343 233.236C132.983 233.604 132.803 234.136 132.803 234.832V238H131.651ZM136.49 238V231.64H137.642V238H136.49ZM137.066 230.416C136.842 230.416 136.654 230.344 136.502 230.2C136.358 230.056 136.286 229.88 136.286 229.672C136.286 229.456 136.358 229.276 136.502 229.132C136.654 228.988 136.842 228.916 137.066 228.916C137.29 228.916 137.474 228.988 137.618 229.132C137.77 229.268 137.846 229.44 137.846 229.648C137.846 229.864 137.774 230.048 137.63 230.2C137.486 230.344 137.298 230.416 137.066 230.416ZM147.798 231.58C148.31 231.58 148.762 231.68 149.154 231.88C149.546 232.08 149.85 232.384 150.066 232.792C150.29 233.2 150.402 233.716 150.402 234.34V238H149.25V234.472C149.25 233.856 149.106 233.392 148.818 233.08C148.53 232.768 148.126 232.612 147.606 232.612C147.222 232.612 146.886 232.692 146.598 232.852C146.31 233.012 146.086 233.248 145.926 233.56C145.774 233.872 145.698 234.26 145.698 234.724V238H144.546V234.472C144.546 233.856 144.402 233.392 144.114 233.08C143.834 232.768 143.43 232.612 142.902 232.612C142.526 232.612 142.194 232.692 141.906 232.852C141.618 233.012 141.394 233.248 141.234 233.56C141.074 233.872 140.994 234.26 140.994 234.724V238H139.842V231.64H140.946V233.332L140.766 232.9C140.966 232.484 141.274 232.16 141.69 231.928C142.106 231.696 142.59 231.58 143.142 231.58C143.75 231.58 144.274 231.732 144.714 232.036C145.154 232.332 145.442 232.784 145.578 233.392L145.11 233.2C145.302 232.712 145.638 232.32 146.118 232.024C146.598 231.728 147.158 231.58 147.798 231.58ZM155.354 238.072C154.674 238.072 154.074 237.932 153.554 237.652C153.042 237.372 152.642 236.988 152.354 236.5C152.074 236.012 151.934 235.452 151.934 234.82C151.934 234.188 152.07 233.628 152.342 233.14C152.622 232.652 153.002 232.272 153.482 232C153.97 231.72 154.518 231.58 155.126 231.58C155.742 231.58 156.286 231.716 156.758 231.988C157.23 232.26 157.598 232.644 157.862 233.14C158.134 233.628 158.27 234.2 158.27 234.856C158.27 234.904 158.266 234.96 158.258 235.024C158.258 235.088 158.254 235.148 158.246 235.204H152.834V234.376H157.646L157.178 234.664C157.186 234.256 157.102 233.892 156.926 233.572C156.75 233.252 156.506 233.004 156.194 232.828C155.89 232.644 155.534 232.552 155.126 232.552C154.726 232.552 154.37 232.644 154.058 232.828C153.746 233.004 153.502 233.256 153.326 233.584C153.15 233.904 153.062 234.272 153.062 234.688V234.88C153.062 235.304 153.158 235.684 153.35 236.02C153.55 236.348 153.826 236.604 154.178 236.788C154.53 236.972 154.934 237.064 155.39 237.064C155.766 237.064 156.106 237 156.41 236.872C156.722 236.744 156.994 236.552 157.226 236.296L157.862 237.04C157.574 237.376 157.214 237.632 156.782 237.808C156.358 237.984 155.882 238.072 155.354 238.072ZM163.265 231.58C163.785 231.58 164.241 231.68 164.633 231.88C165.033 232.08 165.345 232.384 165.569 232.792C165.793 233.2 165.905 233.716 165.905 234.34V238H164.753V234.472C164.753 233.856 164.601 233.392 164.297 233.08C164.001 232.768 163.581 232.612 163.037 232.612C162.629 232.612 162.273 232.692 161.969 232.852C161.665 233.012 161.429 233.248 161.261 233.56C161.101 233.872 161.021 234.26 161.021 234.724V238H159.869V231.64H160.973V233.356L160.793 232.9C161.001 232.484 161.321 232.16 161.753 231.928C162.185 231.696 162.689 231.58 163.265 231.58ZM170.221 238.072C169.581 238.072 169.085 237.9 168.733 237.556C168.381 237.212 168.205 236.72 168.205 236.08V230.248H169.357V236.032C169.357 236.376 169.441 236.64 169.609 236.824C169.785 237.008 170.033 237.1 170.353 237.1C170.713 237.1 171.013 237 171.253 236.8L171.613 237.628C171.437 237.78 171.225 237.892 170.977 237.964C170.737 238.036 170.485 238.072 170.221 238.072ZM167.125 232.588V231.64H171.181V232.588H167.125ZM175.519 238.072C174.879 238.072 174.311 237.932 173.815 237.652C173.319 237.372 172.927 236.988 172.639 236.5C172.351 236.004 172.207 235.444 172.207 234.82C172.207 234.188 172.351 233.628 172.639 233.14C172.927 232.652 173.319 232.272 173.815 232C174.311 231.72 174.879 231.58 175.519 231.58C176.151 231.58 176.715 231.72 177.211 232C177.715 232.272 178.107 232.652 178.387 233.14C178.675 233.62 178.819 234.18 178.819 234.82C178.819 235.452 178.675 236.012 178.387 236.5C178.107 236.988 177.715 237.372 177.211 237.652C176.715 237.932 176.151 238.072 175.519 238.072ZM175.519 237.064C175.927 237.064 176.291 236.972 176.611 236.788C176.939 236.604 177.195 236.344 177.379 236.008C177.563 235.664 177.655 235.268 177.655 234.82C177.655 234.364 177.563 233.972 177.379 233.644C177.195 233.308 176.939 233.048 176.611 232.864C176.291 232.68 175.927 232.588 175.519 232.588C175.111 232.588 174.747 232.68 174.427 232.864C174.107 233.048 173.851 233.308 173.659 233.644C173.467 233.972 173.371 234.364 173.371 234.82C173.371 235.268 173.467 235.664 173.659 236.008C173.851 236.344 174.107 236.604 174.427 236.788C174.747 236.972 175.111 237.064 175.519 237.064Z" fill="black"/>
<path d="M0.51925 131L4.32325 122.6H5.51125L9.32725 131H8.06725L4.67125 123.272H5.15125L1.75525 131H0.51925ZM2.13925 128.9L2.46325 127.94H7.19125L7.53925 128.9H2.13925ZM10.4123 131V122.096H11.5643V131H10.4123ZM16.1119 131.072C15.4719 131.072 14.9759 130.9 14.6239 130.556C14.2719 130.212 14.0959 129.72 14.0959 129.08V123.248H15.2479V129.032C15.2479 129.376 15.3319 129.64 15.4999 129.824C15.6759 130.008 15.9239 130.1 16.2439 130.1C16.6039 130.1 16.9039 130 17.1439 129.8L17.5039 130.628C17.3279 130.78 17.1159 130.892 16.8679 130.964C16.6279 131.036 16.3759 131.072 16.1119 131.072ZM13.0159 125.588V124.64H17.0719V125.588H13.0159ZM21.5727 131.072C21.0287 131.072 20.5487 130.972 20.1327 130.772C19.7247 130.572 19.4047 130.268 19.1727 129.86C18.9487 129.444 18.8367 128.924 18.8367 128.3V124.64H19.9887V128.168C19.9887 128.792 20.1367 129.26 20.4327 129.572C20.7367 129.884 21.1607 130.04 21.7047 130.04C22.1047 130.04 22.4527 129.96 22.7487 129.8C23.0447 129.632 23.2727 129.392 23.4327 129.08C23.5927 128.76 23.6727 128.376 23.6727 127.928V124.64H24.8247V131H23.7327V129.284L23.9127 129.74C23.7047 130.164 23.3927 130.492 22.9767 130.724C22.5607 130.956 22.0927 131.072 21.5727 131.072ZM27.0178 131V124.64H28.1218V126.368L28.0138 125.936C28.1898 125.496 28.4858 125.16 28.9018 124.928C29.3178 124.696 29.8298 124.58 30.4378 124.58V125.696C30.3898 125.688 30.3418 125.684 30.2938 125.684C30.2538 125.684 30.2138 125.684 30.1738 125.684C29.5578 125.684 29.0698 125.868 28.7098 126.236C28.3498 126.604 28.1698 127.136 28.1698 127.832V131H27.0178ZM35.3369 131V129.656L35.2769 129.404V127.112C35.2769 126.624 35.1329 126.248 34.8449 125.984C34.5649 125.712 34.1409 125.576 33.5729 125.576C33.1969 125.576 32.8289 125.64 32.4689 125.768C32.1089 125.888 31.8049 126.052 31.5569 126.26L31.0769 125.396C31.4049 125.132 31.7969 124.932 32.2529 124.796C32.7169 124.652 33.2009 124.58 33.7049 124.58C34.5769 124.58 35.2489 124.792 35.7209 125.216C36.1929 125.64 36.4289 126.288 36.4289 127.16V131H35.3369ZM33.2489 131.072C32.7769 131.072 32.3609 130.992 32.0009 130.832C31.6489 130.672 31.3769 130.452 31.1849 130.172C30.9929 129.884 30.8969 129.56 30.8969 129.2C30.8969 128.856 30.9769 128.544 31.1369 128.264C31.3049 127.984 31.5729 127.76 31.9409 127.592C32.3169 127.424 32.8209 127.34 33.4529 127.34H35.4689V128.168H33.5009C32.9249 128.168 32.5369 128.264 32.3369 128.456C32.1369 128.648 32.0369 128.88 32.0369 129.152C32.0369 129.464 32.1609 129.716 32.4089 129.908C32.6569 130.092 33.0009 130.184 33.4409 130.184C33.8729 130.184 34.2489 130.088 34.5689 129.896C34.8969 129.704 35.1329 129.424 35.2769 129.056L35.5049 129.848C35.3529 130.224 35.0849 130.524 34.7009 130.748C34.3169 130.964 33.8329 131.072 33.2489 131.072Z" fill="black"/>
<path d="M271.721 196.886L266.32 190.453L267.239 189.681L271.969 195.315L275.452 192.391L276.123 193.19L271.721 196.886ZM280.073 189.874L279.209 188.845L279.001 188.691L277.527 186.935C277.213 186.561 276.861 186.366 276.471 186.349C276.082 186.321 275.67 186.489 275.235 186.854C274.947 187.096 274.706 187.382 274.512 187.711C274.314 188.035 274.187 188.356 274.13 188.675L273.207 188.321C273.289 187.908 273.46 187.503 273.722 187.106C273.985 186.697 274.309 186.331 274.695 186.007C275.363 185.446 276.014 185.176 276.648 185.198C277.282 185.219 277.88 185.563 278.44 186.231L280.909 189.172L280.073 189.874ZM278.52 191.272C278.159 191.576 277.789 191.782 277.41 191.891C277.038 191.995 276.688 192.001 276.361 191.91C276.028 191.813 275.747 191.626 275.515 191.351C275.294 191.087 275.155 190.797 275.097 190.479C275.046 190.157 275.107 189.813 275.281 189.448C275.461 189.077 275.793 188.689 276.277 188.283L277.821 186.986L278.353 187.621L276.846 188.886C276.405 189.256 276.169 189.579 276.14 189.855C276.11 190.131 276.183 190.373 276.357 190.581C276.558 190.82 276.815 190.933 277.128 190.921C277.437 190.902 277.759 190.751 278.096 190.469C278.427 190.191 278.653 189.876 278.775 189.523C278.903 189.165 278.904 188.799 278.777 188.424L279.461 188.884C279.586 189.27 279.574 189.672 279.424 190.09C279.269 190.503 278.967 190.897 278.52 191.272ZM282.542 187.802L278.453 182.931L279.298 182.221L280.41 183.544L280.049 183.283C279.901 182.833 279.912 182.385 280.081 181.94C280.251 181.495 280.568 181.077 281.034 180.686L281.751 181.54C281.709 181.565 281.67 181.593 281.633 181.624C281.603 181.649 281.572 181.675 281.541 181.701C281.07 182.097 280.814 182.552 280.775 183.065C280.736 183.578 280.94 184.102 281.388 184.635L283.425 187.061L282.542 187.802ZM289.88 184.776C289.432 185.151 288.943 185.452 288.412 185.678C287.893 185.905 287.404 186.013 286.945 186.002L286.797 184.967C287.188 184.972 287.595 184.891 288.019 184.724C288.447 184.563 288.842 184.33 289.204 184.027C289.78 183.543 290.089 183.053 290.133 182.558C290.176 182.062 289.966 181.538 289.503 180.986L288.639 179.957L287.921 178.915L287.057 177.979L285.938 176.647L286.775 175.945L290.308 180.154C291.028 181.012 291.344 181.823 291.254 182.587C291.165 183.352 290.707 184.081 289.88 184.776ZM288.056 182.828C287.585 183.224 287.079 183.481 286.541 183.598C286.004 183.705 285.476 183.673 284.957 183.503C284.444 183.327 283.992 183.007 283.601 182.541C283.205 182.069 282.968 181.569 282.889 181.04C282.811 180.499 282.874 179.977 283.077 179.472C283.286 178.962 283.626 178.509 284.098 178.113C284.515 177.763 284.967 177.53 285.454 177.414C285.936 177.291 286.425 177.319 286.92 177.499C287.422 177.673 287.896 178.027 288.344 178.56C288.786 179.087 289.05 179.613 289.134 180.137C289.225 180.656 289.174 181.148 288.98 181.614C288.781 182.073 288.473 182.478 288.056 182.828ZM287.509 181.971C287.834 181.698 288.065 181.389 288.204 181.043C288.342 180.698 288.381 180.346 288.321 179.989C288.268 179.627 288.11 179.289 287.847 178.977C287.585 178.664 287.28 178.45 286.932 178.335C286.591 178.214 286.24 178.195 285.881 178.277C285.517 178.353 285.172 178.527 284.847 178.8C284.523 179.073 284.288 179.384 284.144 179.735C284.001 180.075 283.956 180.426 284.01 180.788C284.069 181.146 284.23 181.48 284.493 181.793C284.755 182.105 285.057 182.322 285.398 182.443C285.746 182.558 286.102 182.578 286.466 182.502C286.837 182.42 287.185 182.244 287.509 181.971ZM294.646 177.735C294.229 178.085 293.797 178.317 293.35 178.431C292.909 178.54 292.468 178.513 292.028 178.35C291.589 178.175 291.169 177.849 290.768 177.371L288.414 174.568L289.297 173.827L291.565 176.529C291.966 177.007 292.381 177.27 292.808 177.319C293.241 177.363 293.666 177.209 294.083 176.86C294.389 176.602 294.605 176.317 294.728 176.005C294.847 175.686 294.867 175.355 294.789 175.013C294.706 174.665 294.52 174.32 294.232 173.977L292.118 171.458L293.001 170.718L297.09 175.589L296.254 176.291L295.15 174.977L295.581 175.21C295.695 175.669 295.667 176.12 295.497 176.566C295.328 177.011 295.044 177.401 294.646 177.735ZM298.77 174.179L294.68 169.308L295.526 168.598L296.637 169.921L296.276 169.66C296.128 169.21 296.139 168.762 296.308 168.317C296.478 167.872 296.795 167.454 297.261 167.063L297.979 167.918C297.937 167.942 297.897 167.97 297.861 168.001C297.83 168.027 297.799 168.052 297.769 168.078C297.297 168.474 297.041 168.929 297.002 169.442C296.963 169.955 297.167 170.479 297.615 171.012L299.652 173.438L298.77 174.179ZM305.141 168.83L304.277 167.8L304.069 167.646L302.595 165.891C302.282 165.517 301.93 165.321 301.539 165.304C301.15 165.276 300.738 165.445 300.303 165.81C300.015 166.052 299.774 166.337 299.581 166.667C299.382 166.99 299.255 167.311 299.198 167.63L298.275 167.277C298.357 166.864 298.528 166.459 298.79 166.061C299.053 165.653 299.377 165.286 299.763 164.962C300.431 164.401 301.082 164.132 301.716 164.153C302.35 164.174 302.948 164.519 303.508 165.187L305.977 168.128L305.141 168.83ZM303.588 170.228C303.227 170.531 302.857 170.737 302.478 170.846C302.106 170.95 301.756 170.956 301.429 170.865C301.097 170.768 300.815 170.582 300.583 170.306C300.362 170.043 300.223 169.752 300.165 169.435C300.114 169.112 300.175 168.768 300.349 168.403C300.529 168.033 300.861 167.644 301.345 167.238L302.889 165.942L303.421 166.576L301.914 167.841C301.473 168.212 301.237 168.535 301.208 168.81C301.178 169.086 301.251 169.328 301.425 169.536C301.626 169.775 301.883 169.889 302.196 169.876C302.505 169.858 302.827 169.707 303.164 169.424C303.495 169.146 303.721 168.831 303.843 168.478C303.971 168.12 303.972 167.754 303.845 167.38L304.529 167.84C304.654 168.225 304.642 168.627 304.492 169.046C304.337 169.458 304.036 169.852 303.588 170.228Z" fill="black"/>
<path d="M62 214V220M62 226V220M62 220H212M212 220V214M212 220V226" stroke="#38B2AC"/>
<path d="M39 206H45M51 206H45M45 206L45 56M45 56H39M45 56H51" stroke="#38B2AC"/>
<path d="M62 56L136.5 1L286 1.5M62 56H211M62 56V205.5H211.5M211 56L286 1.5M211 56L211.5 205.5M286 1.5V151L211.5 205.5" stroke="black"/>
<path d="M225 208H231.75M241 208H231.75M231.75 208L268.125 178.5L304.5 149H298H310.5" stroke="#38B2AC"/>
</svg>

    </Box>
  )
}

export const dosagemElement = new SE(
  'Dosagem',
  { x: 1340, y: 80 },
  {
    availableTransformers: ['NaClO', 'fluor'],
    image: dosagem,
    transformerColor: 'blue',
    massBalances: [
      {
        id: 'mb-dosagem',
        name: 'Balanço de Massa da Dosagem',
        content: <DosagemMassBalance />,
      },
    ],
    dimensionElement: <DosagemDimensionElement />,
    connections: { left: 'target', top: 'source' },
    calculations: [
      {
        name: 'Dosagem de Desinfetante',
        variable: 'DD',
        formula: 'DD = 0.002',
        hideOnSidebar: true,
        showOnScreen: true,
        measurement: 'x 10¯³ Kg/m³',
        calculationMethod: (values, _transformers, setValue) => {
          const DD = 0.002;
          values.DD = DD;
          setTimeout(() => {
            setValue(values);
          }, 0);

          return DD * 1000;
        },
      },
      {
        name: 'Vazão de Desinfetante',
        variable: 'D_QD',
        formula: 'D_QD = DD * QAF',
        hideOnSidebar: true,
        showOnScreen: true,
        measurement: 'x 10¯³ m³/h',
        calculationMethod: (values, _transformers, setValue) => {
          const { DD, QAF } = values;

          const D_QD = (DD / 1000) * QAF;

          values.D_QD = D_QD;
          setTimeout(() => {
            setValue(values);
          }, 0);

          return D_QD * 1000;
        },
      },
      {
        name: 'Dosagem de Flúor',
        variable: 'DF',
        formula: 'DF = 0.0008',
        hideOnSidebar: true,
        showOnScreen: true,
        measurement: 'x 10¯³ Kg/m³',
        calculationMethod: (values, _transformers, setValue) => {
          const DF = 0.0008;

          values.DF = DF;
          setTimeout(() => {
            setValue(values);
          }, 0);

          return DF * 1000;
        },
      },
      {
        name: 'Vazão de Flúor',
        variable: 'D_QF',
        formula: 'D_QF = DF * QAF',
        hideOnSidebar: true,
        showOnScreen: true,
        measurement: 'x 10¯³ m³/h',
        calculationMethod: (values, _transformers, setValue) => {
          const { QAF, DF } = values;

          const D_QF = (DF / 1000) * QAF;

          values.D_QF = D_QF;
          setTimeout(() => {
            setValue(values);
          }, 0);

          return D_QF * 1000;
        },
      },
      {
        name: 'Vazão de água em contato',
        variable: 'QAD',
        formula: 'QAD = QAF - QRL + (DF * QAF) + (DD * QAF)',
        hideOnSidebar: true,
        showOnScreen: true,
        measurement: 'm³/h',
        calculationMethod: (values, _transformers, setValue) => {
          const { QAF, DD, DF } = values;
          const QRL = QAF * 0.02;

          const QAD = QAF - QRL + (DF * QAF) + (DD * QAF);
          values.QAD = QAD;
          setTimeout(() => {
            setValue(values);
          }, 0);
          return QAD;
        },
      },
      {
        name: 'Tempo de detenção',
        variable: 'Td',
        measurement: 'min',
        formula: 'Td = 20',
        calculationMethod: () => {
          return 20;
        },
      },
      {
        name: 'Volume do tanque',
        variable: 'Vt',
        formula: 'Vt = (QAD * t)',
        measurement: 'm³',
        calculationMethod: (values) => {
          const { QAD, Td } = values;

          const QADInliterpersecond = QAD / 3.6
          const Vt = QADInliterpersecond * Td * 60

          return Vt / 1000
        },
      },
      {
        name: 'Altura de segurança do tanque',
        variable: 'Hst',
        formula: 'Hst = 0.25',
        measurement: 'm',
        calculationMethod: () => {
          return 0.25
        },
      },
      {
        name: 'Altura útil do tanque',
        variable: 'Hut',
        formula: 'Hut = 2.75',
        measurement: 'm',
        calculationMethod: () => {
          return 2.75
        },
      },
      {
        name: 'Altura total do tanque',
        variable: 'Ht',
        formula: 'Ht = 3',
        measurement: 'm',
        calculationMethod: () => {
          return 3
        },
      },
      {
        name: 'Largura do tanque',
        variable: 'Lt',
        formula: 'Lt = math.sqrt(Vt / (2 * Ht))',
        measurement: 'm',
        calculationMethod: (values) => {
          const { Vt, Ht } = values;

          const Lt = Math.sqrt(Vt / (2 * Ht))

          return Lt
        },
      },
      {
        name: 'Comprimento do tanque',
        variable: 'Ct',
        formula: 'Ct = 2 * Lt',
        measurement: 'm',
        calculationMethod: (values) => {
          const { Lt } = values;

          const Ct = 2 * Lt

          return Ct
        },
      },
      {
        name: 'Área superficial do tanque',
        variable: 'Ast',
        formula: 'Ast = Ct * Lt',
        measurement: 'm²',
        calculationMethod: (values) => {
          const { Ct, Lt } = values;

          const Ast = Ct * Lt

          return Ast
        },
      }
    ],
  },
);
