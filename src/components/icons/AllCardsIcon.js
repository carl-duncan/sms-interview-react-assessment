function AllCardsIcon(props){
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_12_2624)">
        <path d="M10 12V9.49997C10 9.10214 9.84196 8.72061 9.56066 8.43931C9.27936 8.158 8.89782 7.99997 8.5 7.99997V7.99997C8.10218 7.99997 7.72064 8.158 7.43934 8.43931C7.15804 8.72061 7 9.10214 7 9.49997V13C7.05225 13.5009 7.21362 13.9844 7.47277 14.4163C7.73192 14.8482 8.08255 15.2181 8.5 15.5H12L13.348 11.008C13.4473 10.6749 13.4587 10.3218 13.381 9.98297L12.181 4.77397C12.0663 4.27662 11.7658 3.84195 11.341 3.55897L10.5 2.99997" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 6.49997V0.499969H2.5V11.5H4.5" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_12_2624">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default AllCardsIcon;