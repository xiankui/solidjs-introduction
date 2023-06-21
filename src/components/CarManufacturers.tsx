import { createSignal, createEffect } from 'solid-js';

const endpoint = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';

export default function Manufacturers() {
  const [manufacturers, setManufacturers]: any = createSignal(null);

  createEffect(() => {
    // 从 API 获取用户数据
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setManufacturers(data?.Results));
  });

  return (
    <div>
      <h2 class='text-center text-6xl text-sky-700 my-8'>Main Car Manufacturers Of The World</h2>
      {
        manufacturers() ? (
          <ul>
            <li class='flex py-4 font-bold'>
              <span class='flex-1'>Mfr_CommonName</span>
              <span class='flex-1'>Mfr_Name</span>
              <span class='flex-1'>Country</span>
            </li>
            {
              manufacturers()?.map(({Country, Mfr_CommonName, Mfr_Name}: any) => (
                <li class='flex py-4'>
                  <span class='flex-1'>{Mfr_CommonName}</span>
                  <span class='flex-1'>{Mfr_Name}</span>
                  <span class='flex-1'>{Country}</span>
                </li>
              ))
            }
          </ul>
        ) : <p class='text-center p-20'>Loading...</p>
      }
    </div>
  );
}