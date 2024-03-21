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
  },
  {
    name: 'Expendable Anti-Tank',
    category: 'Patriotic Administration Center',
    type: 'weapon',
    sequence: [Input.Down, Input.Down, Input.Left, Input.Up, Input.Right]
  },
  {
    name: 'Recoilless Rifle',
    category: 'Patriotic Administration Center',
    type: 'weapon',
    sequence: [Input.Down, Input.Left, Input.Right, Input.Right, Input.Left]
  },
  {
    name: 'Flamethrower',
    category: 'Patriotic Administration Center',
    type: 'weapon',
    sequence: [Input.Down, Input.Left, Input.Up, Input.Down, Input.Up]
  },
  {
    name: 'Autocannon',
    category: 'Patriotic Administration Center',
    type: 'weapon',
    sequence: [
      Input.Down,
      Input.Left,
      Input.Down,
      Input.Up,
      Input.Up,
      Input.Right
    ]
  },
  {
    name: 'Railgun',
    category: 'Patriotic Administration Center',
    type: 'weapon',
    sequence: [
      Input.Down,
      Input.Right,
      Input.Left,
      Input.Down,
      Input.Up,
      Input.Left,
      Input.Right
    ]
  },
  {
    name: 'Spear',
    category: 'Patriotic Administration Center',
    type: 'weapon',
    sequence: [Input.Down, Input.Down, Input.Up, Input.Down, Input.Down]
  }
];

const strategems = [...patioticAdminCenterStrategems];

export default strategems;
