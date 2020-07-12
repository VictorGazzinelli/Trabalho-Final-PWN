export const initState = {
  email: 'l@l.com',
  name: 'lucas',
  lists: [
    {
      id: '1',
      title: 'compras',
      tasks: [
        {
          id: '1',
          done: false,
          description: 'leite'
        },
        {
          id: '2',
          done: false,
          description: 'arroz'
        }
      ]
    },
    {
      id: '2',
      title: 'trabalho',
      tasks: [
        {
          id: '3',
          done: true,
          description: 'design'
        },
        {
          id: '4',
          done: false,
          description: 'node'
        }
      ]
    }
  ]
};

export const listNew = () => ({
  id: `LIST${new Date().toISOString()}`,
  title: '',
  tasks: []
});

export const taskNew = () => ({
  id: `TASK${new Date().toISOString()}`,
  done: false,
  description: ''
});