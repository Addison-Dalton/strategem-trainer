import { Input } from 'types/enums';

const patioticAdminCenterStrategems: Strategem[] = [
  {
    name: 'Machine Gun',
    category: 'Patriotic Administration Center',
    type: 'weapon',
    sequence: [Input.Down, Input.Left, Input.Down, Input.Up, Input.Right]
  },
  {
    name: 'Anti-Materiel Rifle',
    category: 'Patriotic Administration Center',
    type: 'weapon',
    sequence: [Input.Down, Input.Left, Input.Right, Input.Up, Input.Down]
  },
  {
    name: 'Stalwart',
    category: 'Patriotic Administration Center',
    type: 'weapon',
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
