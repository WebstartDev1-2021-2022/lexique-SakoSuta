export const Categorie = ({ClassNameS, ClassNameD}) =>
{
  return (
    <>
      <section className={`${ClassNameS}`}>
        <div className='Centrer colone cat'>
          <button className="Categorie bold vert">UI-UX</button>
          <button className="Categorie bold bleu">TYPOGRAPHIE</button>
          <button className="Categorie bold vert">PRINT</button>
        </div>
        <div className='Centrer colone cat'>
          <button className="Categorie bold jaune">COLORIMETRIE</button>
          <button className="Categorie bold orange">GRAPHISME</button>
          <button className="Categorie bold jaune">MOTION</button>
        </div>
      </section>
    </>
        );
}