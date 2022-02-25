/* eslint-disable react/jsx-key */
import { createIcon } from '@chakra-ui/icons';

// using `path`
const GoogleLogo = createIcon({
  displayName: 'GoogleLogo',
  viewBox: '0 0 210 210',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="#7879F1"
      d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40
	c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105
	S0,162.897,0,105z"
    />
  ),
});

export default GoogleLogo;
