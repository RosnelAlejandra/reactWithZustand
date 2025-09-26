import { WhiteCard } from '../shared/cards/WhiteCard';
import { useBearStore } from '../../stores';

export const PandaBearCard = () => {
  const whiteBears = useBearStore(state => state.whiteBears);
  const increaseWhiteBears = useBearStore(state => state.increaseWhiteBears);

  /**
   *? Desestruturación: no se recomienda ya que provoca que el componente se renderice
   *? cada vez que cualquier estado de la tienda cambie. auque no este cambiando este estado.
   *
   * const { WhiteBears: whiteBears, increaseWhiteBears } = useBearStore();
   */

  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseWhiteBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{whiteBears}</span>
        <button onClick={() => increaseWhiteBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};