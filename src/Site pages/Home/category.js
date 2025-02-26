import React from "react";
import styles from '../../styles/Category.module.css';

function Category() {
  return (
    <div className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>Choose A Category</h2>
      <div className={styles.categoryGrid}>
        <div className={styles.categoryCard}>
          <div className={styles.iconWrapper}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAA+tJREFUeAHtnN9R4zAQximBDjC2xfCYB+Tc3BMliGsAOoAOch1QQkqgBEpw8nKvlJASdCMu342trBwZbIOjjxnPWuv1yv59trz+E87O+EcCJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACJEACHyCQZbfnudKPeVmtnC3Lm1ul9OIDqbhKXwLX1z+y4qp6K1RlpSlXVV2U1UteLp8LpR+cOE6wvv0wPkCgUMu1BP64T+8KpV//iVOtiqIyPGsCkLvcx0HLZ0bXeu9njdKv7qzBkMazJqBCF8ihl+VKPwc2I1330JCP5cvLm1W6tIU9PwZs+OV6J2xGuq7hAR+/ZqRLW9jzTgFK/ZoXyzUmV/GI8bFx+1JX2Ix0XSJQVdlc6bVEpVC6VbbGxjX7kfIm62uCac7npVyx+PcNsXHN3MnClna8Ccafz99v0vSDuwN+vwu+qn77Ma4dG4d1pe1I1gcoU9pkYUs7PiV49CVtR7I+QBFtbHUTG8cq6PA4E8GzCjoENZYnKACroLGQt/OGBHD+2OomNg59tbcg8RagTGmB3NYmw3yydkrw6Auw7cZYuzFvdmNe7NY82trc2tqk9bYNUEQbW93ExnlV0F4AJ4I/1U1RINhJWhH8RFWQAN4Xotmu7dY82+3d/UkNXUEBJqiCegrQFMPNr09iuAoJ4Pyx1U1sHPrCUPJJAazdmvm/XQOUKe1gAmzM/N+uTQkefQ0ogEWu2VpAEW1sdRMbF18F+eN9sD1b8NhwEfxXVkGu0vnz66I1bc0qdL3AfszWBgX4oiooBDI5AZwwsdVNbBzEBmQRam2esBzW1uZJjN2YE78G7MdsgBvK/gd7eAeMsX63f0ThHlO4Cf4Di1yztUNB7ZMHsLrAxi5DrtnaPuCGigWsWMhdccg1WzsU1D55AEsEyypI+rRQ79xHtZeXPy+kKVN6sf90ZRcjRJcAWOZbUaxULsJKLaJ+ruR+oPFZAVzFcwA/6SqorF58IF3t4PejjYoK64eOarsxrIJwJLsf7gFYjHXxWDdkkadDgINyMxSLXLO1IUjwU4CRpQXokJ1cAFZB7SpoagFCxxuHoBAZz//pawCroK89A/ZHOqsgXBOmHoJCQ03I752A82sCdMhSgJE1DYGH/5sL8DYynvHTF8r9z4f2uN9sf2sBtnf34xMauYeyXD41gfvz31SAnfuWdGQ006XPssW59JTT+dyyPlvSlQt9IF/rxbv/Ir6jjfVpSYAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESGCmBP4CgLGiG/Dez+cAAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg==" alt="Business" />
          </div>
          <h3 className={styles.cardTitle}>Business</h3>
          <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>

        <div className={`${styles.categoryCard} ${styles.highlighted}`}>
          <div className={styles.iconWrapper}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAABD9JREFUaAXNmN1xozAQx6+ElMCA5POjHwzOW9LByRUkHSQdJB2kBJeQEigBnAYowSXoZgUrVosAYQvfecYjPoT00+qv3ZV+/foPfknymGQyf01F8ZHKwymVRZVtiiaT+SWThXb/eQn1/wl2kjw/GFB5OPnhOCy/z8u7ggvx+AwWvQ7Whb8LOABn8lC6U+6CLH23Kvh2C9qNC4wDXA1c/N6/x5AEgvIyOni78Naxcg+fX6KCG2kYNxak3yYTh9K4voHLm/4+lUUTDVzKfDcvjfySiv1HkuweaMfb7c748dZ3T0Mbq4tI7jAEGqyUJLvJwGEGEDJjovimA7/qOgQaZoJCwzpIZf4GkTLLihcaCTvreyJmPxPw3VWw+FGopkEe+I1voDAb8BzrmAFN6D4R+z9Yd1DqSj3oSu10pV7N/6w+dKWesWIoNGgSrT39jZkVo31YA70H6S2NzxIySOQxpa6U0rW66Fpp8m90paxGQwNLKvMKG4f8BDv3lSAfW3dE66MeBeA80Fqfjy/YqNgUn76Ovc+IB5iTANXumGFSmZ+Qwyl1rSpiZbS4rWyme0J/HJ5aCCzK3zv3WWGNM+bfvfrWlXr3QGtHIiNT6ACwgaHfbrXry7ELTd3llHGwLWvtUYnUylp7TqNj8AOvMhh8fpFyZ71Km+cMF6VXJrpW5ay1r870wGP0uxaMlKBpkA+1Ymtt/6wkIn+yloaLUYkQa0O94MjGpAIz0Uqhh3cAuptJd0kWuak+IRGtf47uCG+EhwgqNvtPan2AgEjaeiq/pWHgiTi4QUfX6uSVSK1sBtYFIqvBWyyP66D1GnkZkliNaRtdnlue1RdOZze4CwwAn8WAx0HMlRh5sW9TjvhtRyYkIN0dnnokFxzykVo1TC52hwH5CX93N8tv9vPpq9Hxz/FJn9Ub/HF0GpIrN2cBSa1ueRqQkGVRqWv17QFfFf5maBjhBPhK8G4UXWRlWtlIaJjiUg8UUTaRoHEA94GPAG2iaaWcnfia8HE0XanPbjHCjmd9eAHHxu5xBc50cKl76FbDDBwaiml5ulULhuQVB9Bkq+apC0GL70nDF6zIS5p/8/aD7+eguWSg4WssD4kVt3J3mmBPD2JCR9M8h+rSiQaiM383e+9ERSaPwUws0zxI6eTL6bs9QB+RWb+z0FChy0UaevxgnvOFOmEVAvJtch3IefyDhEMmmEF3ffwc3U1CELmn0sDSDNoH5WnGPjKSOKuvATAmb56dlv049CIA+nXMz9M+DGxrXZ4yU+8D13anRb9fdL0AetzPt2mwKwW07LCEPEctguSVF0Mz+WB7RuNDQG5luC9hbeB3V5WxoKHz7sDUB4rPLnSjchVw1xH66bZhZklzxEwtyN7zjjsPg5C8vN3K2KHrx4eBwNlMz0CTNvmCjGNl7ABKjW6K7DPZe9hzQsfB0a1LB/DUN56VCdhfx4cFqO25kLwAAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg==" alt="Startup" />
          </div>
          <h3 className={styles.cardTitle}>Startup</h3>
          <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>

        <div className={styles.categoryCard}>
          <div className={styles.iconWrapper}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAA5NJREFUeAHtm91R4zAQx10CJXj8cZPHPGDD8HIpQVRwdAAd5DqADijhSkgJjq+BlJASdCN/EDnYRNLy4Jx/zGSsEK0l/f6b1XrtRBF/EIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEZkpAV+pGVyrWldroSj3pWj3rWr3qvXrXe7XTe3XQe3XUe6X1Xv0xfWe6lOuaVgO8hWvA+ryq61rpDGfbePzJq33gt30rtZ7hsq5nSk2Y8fP6oUh/H39ez2pnOFNdq61n2LEFOJp9Y4bLup4pdfHfhurTfr+elc54pk1GExKGyILkqupKvQSGILxfgr/Lfkxu7xNyTn3ZfMPx60op64LqBNVdjEP46Au27K5034K9vheofvy1YIxhS9eVWnelhBCPt23wfl8Juo22r+HYMP3btXr2HX+x/ZuQ0xbRfEGbols1GqpIPd38SVBge+/2ChOyht+aWm3dRl94L12p36Pe22+i48ejqQvZ6JpUtS9Hk3baaKbbgfAr19p+nhfrNL/bpXmpx1/FMcmL1+kZ/ueffAob495+2hNq5QxrtbqP07w4joMfCrJIETwLawftGVYMVBf4fZ84Xi+rUtqVF07ePe39u5Ay8tehZ/gNMCLEWbG8ewUXLrY+bbQ+ERkBHGh1dZ6xb8HBXA07nGKyCwJMohl+0InQVzqN129DQs7wrFGEAOdEBO/jeHMTx/fx2GvqtAgwRcbz/2levH2VTiZ5eUjTUp2fFgHOiQS8b+F/zlj61NE+Ztntxh4CAWwaAW2Tl9uAL7WT9G5w2xEBAqDbJnFzJevm/Y04WbGz7RHAphHQRoAAaN9pggDfSTOKIt9UEgG+SYC2KvlVSbjUJpU0pWN7SASwaQja6Y/ycCmDaT8vjuZCqx8KAXoSgmOW3W/c4LfZTpLdftxGRAAB+N7UXKF6CWDl8gjQUxQc07x4QgABQKkpAkgJCu0RQAhQao4AUoJCewQQApSaI4CUoNAeAYQApeYIICUotEcAIUCpOQJICQrtEUAIUGqe5w9rr1JEVp6Kcc09YbeHa80YSV4M7gkHPBv6UYmVrntW9klWbp1EyIrd+QOyWXb34lTObm0HAFerdZzkZXV57OYR9cFvDWYFkMlAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAArMn8A+14lEnSSS6pgAAAA5lWElmTU0AKgAAAAgAAAAAAAAA0lOTAAAAAElFTkSuQmCC" alt="Economy" />
          </div>
          <h3 className={styles.cardTitle}>Economy</h3>
          <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>

        <div className={styles.categoryCard}>
          <div className={styles.iconWrapper}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAABB9JREFUeAHtm+FVqzAYhh3BDS6S0NOf/dFQ7/1jNzBOoBt4N9ANHMEROoIj0N4FOkJHyPUD0oZIgELQ0/B6Tk4CJQGel7xfEvDqCn8gAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgMBIBxlLJktUHS1LFEnGIk9V7FN1GrtPN57cRm6X70/Fpxni6iRPx3FTP1d6k9/NZ+lqAJPinFCfpPooW13VwWCKezGPtcpykGWPpY11d7DMI5E+yAf0rSPHG+XJtp5iv3uxj67ZJRAhhALeLbU9yHdQ++wpLq+9N9jVNaps8uw/QPnUKS3PHlUmB1zfL+e26CSZBi9nq3U6MizJgn2JGUzv6N4igyRv5afRTA5Ol0jj0WBxiXYUIsKMjzPl8YQwptQg0FBXPx4OswhABit4gPqwmw94kqyGgMU9fXKOSiP+++xzbP1JyDT81pW4CiEPMxVt+zrJd3X6Xc+hzXXxeN84f6sVtAhD4NhEvHmyXG2gCNcSLG9vly5cu1zaJY/IZafNEK2MJjWjOSySeHtmYOe03weZC8XTT1H7QPcWE8x1lM3DXWV/dNdAs2xQtqDItrNXd9Fj7Ii7uNMDPQFvbS+xz0xxD1wkuz0cgDRYURQvnimcTDFcMqAjQUXzbtprOe3G/kb+64kA8IFi6BDAtqE18sycEHQfoqSmCYb7ev6d1e/NJ7fNUuQSgYGu2RyKUDwDZkTPd3Pz5ZdZDuYWAW4BUxXz5t6U6fh5KIEnEoinI8tnydeg5gq6vMhmpTD6dmSoLc+Ua0sb0crNMwZViQtFb6A1ac6LlkqCh65vL4W+lUv1SRvV1W5SfE2xNgb6WxWES75NVJtc94WvR9iqTld7QZklfYetVVzuvBnFT6GDKKpOLgQIUQmSy4vNtltRVhOCD+EAL0r1A5yNY0gSsSG3lwUsvKOLICJYUuBWprfzwKMAolhS0FamdfPYuQNEbPFqSOAQTeO0bUZm8HkkA6g1eLClORLirpCTIKDZkzi1qRkmuhcGIL+9pPchM9kMT3LaH+YAeCTXlFUtyrSENXRy8WHHUVm5GtCItTKYBQQBNoszLOYHPIamGbubH98QQwBKANr/BiiBADffKLrWTLyNaEQSo0HZsjBgPIICDeWW32sr3kXoBBKiQdmz8qACOf4VyXGqYu39KAPqONEyiZ97VTwgA+IZI3gXYPTwqSv8e7vVpypc2nT6B13Umk/sWYDLgfN0oBPBFsmc7EKAnOF/VIIAvkj3bgQA9wfmqBgF8kezZDgToCc5XNfrazdvnKjuJ2a0vYdAOCIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIDAWQT+A+RiP5PusdgzAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=" alt="Technology" />
          </div>
          <h3 className={styles.cardTitle}>Technology</h3>
          <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Category;