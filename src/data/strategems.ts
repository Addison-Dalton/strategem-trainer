import { Input } from 'types/enums';

const patioticAdminCenterStrategems: Strategem[] = [
  {
    name: 'Machine Gun',
    imgPath: '',
    category: 'Patriotic Administration Center',
    sequence: [Input.Down, Input.Left, Input.Down, Input.Up, Input.Right]
  },
  {
    name: 'Anti-Material Rifle',
    imgPath: '',
    category: 'Patriotic Administration Center',
    sequence: [Input.Down, Input.Left, Input.Right, Input.Up, Input.Down]
  },
  {
    name: 'Stalwart',
    imgPath: '',
    category: 'Patriotic Administration Center',
    sequence: [
      Input.Down,
      Input.Left,
      Input.Down,
      Input.Up,
      Input.Up,
      Input.Left
    ]
  }
];

const strategems = [...patioticAdminCenterStrategems];

export default strategems;
