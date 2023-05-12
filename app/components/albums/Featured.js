import Link from "next/link";





const Featured = async () => {


    return ( 
        <section>
              <article className="overflow-x-scroll flex gap-2">
          {/* {data.albums.map(item => (
                        <div>
                          <Link href={`/albums/${item.id}`}>
                            <img className="w-[10rem] h-[10rem]" src={item.images[0].url} alt={item.images[0].url} />
                          </Link>
                        </div>
                    ))} */}
        </article>
        </section>
     );
}
 
export default Featured;