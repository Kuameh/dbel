const Program = () => {
  return (
    <main>
      <section id="program-outline" className="w-full">
        <div className="flex w-full flex-col items-center justify-start px-4 py-12 sm:px-24 md:px-12 lg:px-24">
          <h1 className="mb-8 w-full border-y-[.5px] border-gray-300 py-3 text-center align-middle text-3xl font-normal italic">
            Program Outline
          </h1>
          <div className="grid w-full gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-8">
            {/* Officiating Ministers */}
            <div className="col-span-full flex flex-col items-start justify-start">
              <h2 className="mb-2 text-2xl font-normal italic">
                Officiating Ministers
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Rev. Jerry Hanson Nortey</li>
                <li>Rev. Isaac Kwakye Anokye-Manuh</li>
                <li>Rev. Boadi Manu</li>
                <li>Rev. Bright Owiredu</li>
                <li>Rev. Asare</li>
                <li>Rev. Essoun</li>
                <li>Rev David Torto</li>
              </ul>
            </div>
            {/* Bride’s Maids */}
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-2 text-2xl font-normal italic">
                Bride’s Maids
              </h2>
              <ul className="flex flex-col gap-y-2 text-xl font-light italic">
                <li>Stella Apemah Baah</li>
                <li>Pearl Dzifa Agbeyon</li>
                <li>Grace Ladonu</li>
                <li>Abigail Abordor</li>
                <li>Stephanie Apemah Baah</li>
              </ul>
            </div>
            {/* Groomsmen */}
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-2 text-2xl font-normal italic">Groomsmen</h2>
              <ul className="text-xl font-light italic">
                <li>George Owusu</li>
                <li>Edmond Nyarko</li>
                <li>Samuel</li>
                <li>George Opoku</li>
              </ul>
            </div>
            {/* Decorations */}
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-2 text-2xl font-normal italic">Decorations</h2>
              <ul className="text-xl font-light italic">
                <li>Ok-need Event</li>
              </ul>
            </div>
            {/* MC */}
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-2 text-2xl font-normal italic">Decorations</h2>
              <ul className="text-xl font-light italic">
                <li>Ok-need Event</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Order of Service */}
      <section id="order-of-service" className="w-full">
        <div className="flex flex-col items-center justify-start px-4 py-12 sm:px-24 md:px-12 lg:px-24">
          <h1 className="mb-8 w-full border-y-[.5px] border-gray-300 py-3 text-center align-middle text-3xl font-normal italic">
            Order of Service
          </h1>
          {/* <div className="grid w-full gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-8"> */}
          <div className="grid w-full grid-flow-row gap-y-8">
            {/* Opening Prayer - Bethel Push */}
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Opening Prayer
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Bethel Push</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">Worship</h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Jennifer Otumfour and Living Faith Choir.</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">Hymns</h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Gideon Inc</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Bridal Possession
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Asafo Yehowa by Mr. Alfred Amissah and RAC Crew.</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">Praises</h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Mr. Alfred Amissah and RAC Crew.</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Bible Reading
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Twi - Stephanie Apemah-Baah</li>
                <li>English - Grace Taylor</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Offertory for the Church
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Gideon’s Inc.</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Introduction of Ministers and Dignitaries
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>N/A.</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Song Ministration
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Gideon’s Inc.</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Exchange of Vows &amp; Sermon
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Rev. Jerry Hanson Nortey</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Song Ministration
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Living Faith Choir</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Signing of Certificate
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Couple</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Offertory for the Couple
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>RAC Crew</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Presentation of Certificate
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>N/A.</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">Announcement</h2>
              <ul className="text-xl font-light normal-case italic">
                <li>N/A.</li>
              </ul>
            </div>
            <div className="grid items-start justify-start md:grid-cols-2">
              <h2 className="mb-2 text-2xl font-normal italic">
                Vote of Thanks
              </h2>
              <ul className="text-xl font-light normal-case italic">
                <li>Mrs. Joyce Asamoah Tawiah</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Order of Photography */}
      <section id="order-of-photography" className="w-full">
        <div className="flex flex-col items-center justify-start px-4 py-12 sm:px-24 md:px-12 lg:px-24">
          <h1 className="mb-8 w-full border-y-[.5px] border-gray-300 py-3 text-center align-middle text-3xl font-normal italic">
            Order of Photography
          </h1>
          <div className="w-full">
            <ul className="grid grid-flow-row gap-y-8 text-xl font-light normal-case italic">
              <li>Couple</li>
              <li>Ministers and ministers’ wife and couple</li>
              <li>Groom’s parents and couple</li>
              <li>Bride’s parent and couple</li>
              <li>Both parents and couple</li>
              <li>Groom’s family</li>
              <li>Bride’s family</li>
              <li>Bethel temple</li>
              <li>Bethel youth</li>
              <li>Living faith temple</li>
              <li>Living faith youth</li>
              <li>Co-workers and friends of the bride</li>
              <li>Friends of the groom</li>
              <li>Old students of the bride</li>
              <li>Old students of the groom</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Program;
