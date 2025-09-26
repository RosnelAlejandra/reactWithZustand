import { WhiteCard } from '../shared/cards/WhiteCard';
import { useBearStore, Bear } from '../../stores/bears/bears';
import { useShallow } from 'zustand/shallow';

export const BearsDisplayCard = () => {

/**
 * ? useShallow: evita que el componente se renderice cada vez que cualquier estado 
 * ? cambie si este no ha cambiado realmente.
 */
  const bears: Bear[] = useBearStore( useShallow(state => state.bears));
  const doNothing = useBearStore(state => state.doNothing);
  const addBear = useBearStore(state => state.addBear);
  const clearBears = useBearStore(state => state.clearBears);

  return (
    <WhiteCard centered>
      <h2>Lista de Osos</h2>
      <button onClick={doNothing} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Do Nothing</button>
      <button onClick={() => addBear()} className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add Bear</button>
      <button onClick={clearBears} className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Clear Bears</button>
      <div className="space-y-2">
        {bears.map(bear => (
          <div key={bear.id} className="p-2 border rounded">
            <h3 className="font-semibold">{bear.name}</h3>
            <p className="text-sm text-gray-600">Weight: {bear.weight} kg</p>
          </div>
        ))} 
      </div>
    </WhiteCard>
  );
};