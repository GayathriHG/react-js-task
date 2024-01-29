import { Link } from "react-router-dom";
const RecipeTwoPage = () => {
  return (
    <div className=" bg-slate-200 shadow-2xl mb-10 p-6 flex  rounded max-w-6xl mx-auto mt-44">
      <div>
        <div className="flex ">
          <div>
            <p className="font-Handlee text-xl  px-10 mb-2 font-semibold">
              <u>Chicken and Vegetable Stir-Fry</u>
            </p>

            <br></br>
            <p className="font-Handlee text-xl  px-10 font-semibold">
              Ingredients:
            </p>
            <p className="font-Handlee text-xl  px-10">
              2 chicken breasts,<br></br> thinly sliced 2 cups mixed vegetables
              (bell peppers, broccoli, carrots, snap peas, etc.),<br></br>{" "}
              sliced 2 cloves garlic, minced <br></br>2 tablespoons soy sauce{" "}
              <br></br>1 tablespoon olive oil <br></br>1 teaspoon sesame oil
              (optional) <br></br>Salt and pepper to taste <br></br>Cooked rice
              rice or noodles (optional, for serving)
            </p>
          </div>
          <div>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGRoYGRgYGB0gGxoaGhofGBgYGyAaHSggGhslHRgYITEhJSkrLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGzImICYtLy8tKy0tLS0tLy0vLS0tLS0vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgAEAQMHAgj/xABCEAACAQIEBAQDBgQDBwUBAQABAhEAAwQSITEFQVFhBhMicYGRoTJCUrHB8AcU0eEjM/EWJGJygpKyFTRTk8LiQ//EABoBAAIDAQEAAAAAAAAAAAAAAAQFAQIDAAb/xAA2EQABAwIDBQYGAgICAwAAAAABAAIRAyEEMUESUWFx8BOBkaGxwQUUIjLR4VLxFSNTcjNikv/aAAwDAQACEQMRAD8A7HNLfj3BG5hWK7qD8iI/pTAHrF1AylTqCIPxqr27TS1aMfsODl8xXwZ7in7wJx1rimxeOaNVncj36jr3qt4m8M+TiGH3TqNNNaq8JwJtuGGhE/6Uue5sfUmLGmfpTpiEynnBrU7yK2Z8wCnn9k9+n770HxGLiVjXvQrqeyYPQRTam0JCt4m8pUqdQRBpUwuLNi6bLH0H7OvXlV6/iI12mq+J4XdxQU2LZd1bcbQepOgj3qzAD9JyKq8kDa1C0cRTy8Sjrs+8ddqIXuGG7fzrAEAT7Ux4bwKz+WcRdC5JJVdTJ7nQfI01YHheHt7Jm6FjP9qLpsmJ3IWpVAkDelrhXDVTYFj1o1a4fcOyN8v60RxnGUsqYyqeQ0FeLHGixAgbTqwG3vvU/M0GO2JvwBPpKp2VZ7duLcVi1wm5zX6irVvhrDp86o3eJ3S8rooG0Tmadp5VSXHXXYlmZdNgdF+G59zVXfEKTcgTeN3r7whocbFEr/EEtsVykld+nzothLyuoKncTXJeI3wlwjzGAYyZEmZ3WT071s4V4iW1fZUuMyHYvoSR2nTnWdHHlzvqFjlwzjieKNdg2uphzD49QLrsAFTLSrhfF1sgCZY8qxxDG3rgBF0rP3V0+u5oitj6VMbzuHQ/O5YU8FUeRNhvKastZy0o4Xit1dM5Mddf70c4VxdbsqYDD5H2qMP8Qo1yGgwdx6hRWwdSkCcxwREitRFbzWtxRyFWk1qdAdxWwtXkmqqyo38EC2eTMgwdtNh9Z963GtjVrNdC5eDUqVK5cpUrNSuXLaj1YVqHWnq0r1ZQVS8QcKF+3H3xsf0pCOCKsQRBH0611G0aHcX4QLnqXRvz/vQuIobX1Nz9UTh62z9Lst+5JoQsmUb6EHoRqD86H+IMG3pugQWgN0B/f5U34Lgseq6cq9OZ/oKxxTHIV8sIuXpH19+9Bmm7Z+oxulFGsATsCd+7nzS9wbhWC0a9cN598gVgg+gLfHTtTA+PgZLZS2ANFiBHtQC8La6wAZ0B2+P+tV8bfazBe0xUgnS5B+Tf1oOpUqNbeBpIPXh5KG7bnE7Moy3EraI+e4XYCTB015aVX8P483ZW3mEn0iZE9Nfal5eP4ZiqeXd9egGVCD8mFHsPcFkej089hz7a0OHOYWy6OR43vPrZECttAg0z4SPCArmKwBLHzIYzPaQfalPjfFil875VG3LkY6A60x4TjmRSSFaebUleJrvm3Gf7CNE9FgGNR1nc1bDMHaS45zY6X5XQ+Or9pRhuUjLL9ckWwniVC3lhiM41Lcp2G0fs0dweIUvkDqCVEgNJAB+IMSB8a5Yt25qxGUT6Qs6ACJ07z9adMPdwtxVu5Zu5BITMuZiRtEf6HWtcRQDTb8368EnDyCFq8QWVxIe0VyXBrZfTTmoJHI7Ed+tc78nEW74tvbcXJ0EEz3WPtD2roNl7TyLrlDMhgRpqGAmCIMjU7d6M4TGWbji2VR7gEIeiuCGBJG+UE+xrSnVdQBaRPj48QURTrkFLHgTHqmIBuAuCIEn0hjtM084YFyUBzQdwdB3pSs8Ew9m+S10KAGbyzJGu0HTbbbYDnRzAXjhgxYZwNc4mGUwY9xvFC4osqkO05b7br5Df5p5QxNN0hljaAf7/ALTMnCiT9uticJCQwcgrrP73rKlGVGTMFYA/E9B+9q2XCDbZSTOoB/KrsZTYftAO+VRznkRtGDmIRDh3EGfNOoECrVzGIolmAHeuXcH47ibF57RYOJOraTH5aR2o5bxD4i+zEwmQKUBETrJJiaYfO9mwfVLtR+I9EGML2jiY2W+dup3J0t3UuDMjA9wa1PI3oNgcMbBzh5G2XSKPWrodQeRozDV+1H1CDuztv/SHr0ezMtMjeqxesFq3PhuhrQ1lxyB+NErCVK9qK1gP+GvRRjXLpXuKlavIPepUqFVstV63Q6yav2jUBWV21Xm/iQmm7dK1YnEi2P8AiOw6d6A38eN5kmlmP+Itw/0NP1en7W9DDmpc5deSt452aTNCr9vKMxGpIAnqTA/OrNvjaqsGD/pS/wAX4i9zE2LCSstn11CqvqJH/VH0pNUqiq4FzyZzG7fwNp74TKjTcLRA39cUU4NwjO7XbpDIDCRsxG7a7gHb51X8VcTtOrKSsr7TVDjXi9VTysP93MpaNsmnpA3/AGaVMJhi5uO4hbihwxJLKTIAHURO/OiTSaykR9rdd53fpYDEl9cNpjadpoB0M9yEHAXLz/7uCxBB0jTXQmdgT866UBcGXzEC+kA69tdtK55hfEZwYXD2W9PmF3YxmcclmPSIkRTRgOO/z0shKhPtZiMw+A3nXWq42m7ZaW3AvP5RmDfD3NqEB1wR+Fr4lwq4XLWHK7zsQekg/aX69KVsRdMf41prZ5xJQx1G6/Wul8MxKXLYYsDA0loiNx32r1i8NZuggKPzrKnWLQLex9x4z3ZKuKwdOq4m4O8R56rlv8kXISRDSS2YchmPPTfeNdhqNDXDeEN5QdACo1YqwLEHQCDznl0nrXrEYLy2L2lAMgyAToNxMQOcjpG9bLOHuWmUk5ZIBg7gn0n/AMTp15xTB9X6QfJeedTAeWtMjes2f8FgcqGXywxBCq0E6a66DtpvvRHCYJhegNLE5z6TqCSQA25EkCIgAbiYqpjvDF5rQ8hl81fVrpKrvyMzK6bQBJ2FOXhxlvWrF8KJK5T/AMLbMPmCKDqkxO+x8fDet2ATCWPEOHt2GDOFe4YbyxIULzGxGp7CvVnG+YfOylEM5VzEsW+InLrJJq343dLWdz9toVfYa/Kl/hOKa4udQFPITIABgTHeeX51wBLeVs1vtAGCmvw9xlAWUtIBJB5b7D5UxYfGBpIGnfSkY4ZLdw3FzKHgmCCDr6tNx/ei+Dxcr6TrGwOvaqNcQeGaYseyqdmL/wBaIb414TeZvOsKSRqyjcwIJXrsNN6q/wAL3usly7cOjMAFI1gc/rt2pnw+PJOVp+NAuIY7yy4RQpXmBvzkipdUGzsESZ67kR2TgReB5c09Oi3CVnQcqqXMTcsPGptxMnaeY7Vp4E0oGP3oM9yJj869eMsayYe5ln7J1009M861pOJG0LGRlzj0QldsHYmyM4LjFtzAbXpRJblcY4PxbOR6sr9etdS4Niy9sSZI3NOqNZ7nljxyPsePkUvrUWtaHNPMfhGlr1lFVUuVYR6KQy2ZRWKmapXLktWBRBXFtDcbYbdzVfBWsxj5+1A/FvE5ORDAWNOoofE1xRplxRWEwzsTWFMLGLz3mLsxKETlGnp6k7/ChV/E20cJqqBdF2E8qM5SoyiQGABjkI29qTfFLlW0JzoZDDpXm6h7Sod5Jnn721T7CU6bdNO/3TQ/Aiy+Y65ByjTloSPjWzD8ND3VultUUooUaQYknvoKDeHcQ1y2M7lu7MT8po/asi0jMXA12P5jtWV9vZYDHE3PhFuC6q3ZnaInSB+yljxX4ftLkawAlwMDAkAy0sdeeh160P4s5MKpjSDHzonjTdusTnIWdBvE7x7xvVe5gkaDBn3gf3rYVNohz7xln3/pXpUHUATRaA4i7jAHlJ9BldJL8HVrsXSfh9OtXbXhUCdgeTSZH76U2tppVa7UHG1chZdS+DU3OL6rySd1uvJUMRaXDWlglhzzQdT25itF7hNywVu5iVIByqSFOfY6PBABn3rT4kullS0N2IHzNNFizeuYYI5WVUIG20AgCB0rVryyn2p1N51GvfqED8WY4VRRo7rgdTl4oXgbNvEFQrFbgLeliNSvQgwYM7fio1xXhyFLa5T5h3AOyn8RJPTkJ60CHhN8oYuzMomRvPLLMZdo1P8AbXwHxLcD+XfS4TJ+0JEg6wQB+XxrnS8l1N0jzF5keCUPouo/e2PRXsTxC7hbrXAmZmtKokx9kkNHzBii/wDCvGsyXQ+o8wsv/VBI+f51uxK28QgBE81I3B/fKtnhbD+VnhYac3Zj2942rKlWa4jZzHtp3rEShf8AFTCk2RcH3SPz2/T41zwzYysWKgtPPTbt2rsvE1GIRwV0adOn+lc48T2GtXLagDY6jXXaRWmDrh0tFxJPXWqLFN1QgDlK34/jaPhPKXYQwJ1IIgmCCOR+RNF/4bcU80XEdchGVlkRnQiARyaIjSqXAsGmXKwAEH8qL8OstYBVPVb3UAD0t1Gogdqh1RpaWjfYkpy34a5jtra0yj9wmi9aB3251zrxmrWGedRcMqw2IiIjqP1o9xfxEiKuYEExyPTbv/akPxzxt7nloUKqNQfxTufhVsMw1Hi3X9qlc9kz6jfd6LpnhfEFktEHTLoOmkVnxtiitpQRqznTtlM/mKBfwtxHpPq2gidY7CaueM7D37qW85BALMx2CnTUddNqilSa15Y46+3jPcoqlziC0SYEd/l5pBI8tgBy50++DfEJGjdPmKUOOcKuI5yW7jWxEPlmdNScuwnrU4bg8RKm2HB5+nbXqadF7dgP2oPMJc5sPLCLLuNi8GUMNjVpHpY8MYq6toJdAmdNeXfpRW/d0PrA7D+tU/yVEM2pkjdHqSB4SeCGdSIdARXPUpa/m7n4jUrP/MUNx8vytvk3fyCI373k2C33m/Kku1hy91Llwwr7adDMdpGxov414jByAE7KANzygTzoXgcUTbVGGUxAkzl5ZZjl1/tWPxGpJhdhajmVWtaYnVFeIYpnEWo5rPMEa/rSL4twxVlXNmMHOfypywmHe2gTMpCnUgjUkQTMajQVS4lwpXYuxgkRJ2mNKXtqQ4bx+IMcJTtrQAQMuolKfBXuLJWciwWM6gHQGOk7mieHxBvIGZycrEAAmCB9467zI9hQ7AYs2sTcsbf8QY6LBkSN82go1hrGY5Vid6jEkU8hcjPrVFUG7Tdp2Q9P7WM+kcqyts0TGAtoozGW94/SvPl2z1/7v/5pfthc74pQaSBPh+0Jaq11taY24fayySR8f7UJxvDLfqBLmdzm/QLArWnBuoHxrDDQnuH5QO3w25cvpeaBaBEa6kSPkIp6sX7TpFv7Skhh3A2jl70rYDFWbdoW8twqvpDLDfQxr8aM8I4RlbzypVSIRG+1H4j0On1oquC5l9BA/rTmklDF1KtdxIzN9LXA/rnHAmuCkeufYaT2rRxHh1pgJtD06r1E761e8w8tup3rAdQp1BPfmO3yrBoEbLfx0eSZkl33X4Jd8O4ZsOHZ2NxWb0aiQBMiNz3O21Mf82hiAZO8c6HYrh8gFGI1JjlJ3MdaIcK4ZkALtt9dedWdtvdLczEzHC9o813Z0KdOBxsJW+2DZLAOfV91gKB8S4cuIttlgtBAJ5EbbdCKN8XKuxKx6RHP599TtSr4UxR1WSQTJ7HnWjnbLyQfpabd/lnuCWVKTabGlognPyVDgt0rNtxluL9pT9COo6EaUaKgwdjNHcRw2QzxupHuTB/SgNhAHVWOY6mJgkDf2NUfLXwRnp7jXTROMNjWVm7nDz9vNLXjZz5toCBlk+86A/Q1oxPBFxOGJDf4kSs9qscVQXbzj7ZtsAQOekxptufjR3D2lItxPpIlSp0B3AIEUY2oWMaQY185SrFDtKjztZewjwsgX8PrJFu4uzodiYykH9j4U1YjEkvbZgDngmNew9vY0teKLBs3Vv2QVUlRcAHKftfLSmHiDgG22VU0EBWzDbeZOvasqgDyXjX18I9M0bhKgdRJ3AjyPWWiZoWdBApK4tjMmKdVMKCDHuoJNNNvEDKD1FK3F8FaxRIOhba4ujDlzHbn1qGN2/8AyHy6ySemDURKz4itqPVcUR1Iorw28MQpZG9PWD9K4raw6rce1mLBWZc0ROUkAx3iuvfw5xJ/lgpA0JQx25/Gth8MYXg1CXDwC2dRDKe2DdHf5UfjPyFYq5/6cvU1Kb/KYP8AgPP8oLaqb1z3xvi8pVjqM2v9dxWnguMe40lTCrG0QQY1BJMmPy6V68YwyssZj0G9JDcBv2La4oGTJ9GZoMRGoYGZ66UFWaypYmDp7crwryKdVr12HhlxHVgN1PPuJq5xQWxYVWUAhpBM+kxzjcaCfehHhTFpibPnJpIAZejrow7QaNs6umRxJykDoTp9aX0pZLSADEXHH9W6hw5zXPDmkxIPkuV4Xh84q5efTIIy9WkwfYSfpRbDcQbOUthsx/CN41rONw1rDY5HvMRbYZVB1AcmBPbUa6xFOdrCW7YJUAOTM84qtTRzstnl3cUcMUxoLQ2ZOtwUrYbCYy4HLwpmV6gchAWJ569eVA+L8K4oi+YrZk/CAM35a11HDoFRmV0MfaB+0DtBHLXrFWfNlAzpCdeXatKdPZ+5oBiY2QRHE3jibX1S6u9r5GzadLHuSP4DW+2FN/FFZc+hSuoQaS3cmdOQHeidvg1k5nkwRIAJAX2ArT4nvFB5yKzp95R06wOn6144RxJL1guhnkO2k1m54kvDRs3iMlLcKzYDT5wtls/YRQAix9rnrOkb96KX9VEdNaHYjCgICgn8+v8AetXC8S2obTofyoZ75MEZ9W08O+6N7EFks00Vvc9or0iqRqBIrF1o1j35Vswl4OwEAxv7df30qjG/VBUOJiQpbG8fKvF3GlVM6GpxC1lcFTpGo+g/rVLiaFlifcipeC0xPNSxrXwTkVWwOMJZpOblB5TQWzhfIa5eFw6sSEIEAkzlB5ijOAe2bdsbXFds2m40y679ao+JWR18uQrM8jtAM+396Ia0NdsA5xPhPlrxVsRTa8HablKOeGOOfzKsACAkAkjSTy9/7V4x3ht7lxnF7ITEemYgcjIjalrwtjlw7/yzERcJdTO55g6zOlNlxSQArkbdZn33NWqOax2VtN5Hh/SBoYYU7tMH0S3w/hNqwXd8QvnhmzkuIbWSIJ1nfrTVgMQjoHUCD32PMGOf9KXhw5cSzLfAcqHS3DLn0+yAq9B16/Gt/hsFMAqc/WPiHP8ASi8XQ7JgqbRM9d24cksc84h+zAB3743opjypRgROlJvF+Isty1bYcjGskzsRqNdI35GtmI4tjHuGzbW0uUgF3JMzr6QOx50H4/hr1u9ZbEKxUMCXQSsSdM0Qp20P1rLDUvqEm+fULfDGpTDtrI2661TdxLFZVRQwzch2jf58+1DbUgjMTuNuY7abVm/LqcYwVBPl27fMAKCsTvIkk/1qkMUYG+pB0EkCY0nt9YoqizZOzF85RL2sYzaFgNN29UPEfDVtOl1RBYGR7bE94Ipr/hhi5L2ieeYfHeq+M8P/AM0sZyrqkWmn0GDsdP33ihHhbzcLjkt3RlbNlPQhtiOo2o3DVKbxAMx6fj8Ja6q5xI005x7rtflGsVjzx1qUT8uzj4rHtSuSjOym4f8A/RiSY5ch8qspYBRrZAgyD3kVcXDN5KgwY+72rUjhSdN/00ryr6u3cqj2aqeDUOHuEtIS9C9s6kifiPyFONu4VY5hmAOkcxSjg7am3fzOPR6gCfxbR8Qay/iFVgAuxjtH11+lX26kgxncda5JlgRVqs2GUy7iMvEkAG+/JEfEPCUxDWzcUZVksDOxG4jn/WiuHvqbKujqJEhhGnLUkaaDkaWV4jiMVnQZRlQsc2hCgdY56Dal9cI0BFgAbLMAdgDpz2FENDrG/DvzyNjEQRKe0vhxqCKjg0iJFnRnE6eZRZ+KsrXEW7bCmTmFsMxblqXEjQaCPzqzwfjJgJeIgkKpJEknb0iYE6e5paeyy/aG/Ws4dGZsqiZ5e2v03nlFVc0OaGOGVsr/ALRzvhjAHOa83vJII/XOSunYLh5uS7wloLAynUn8VKmM4e2Ge6hKgMc5A6kamf3rQmz4ivWQLcZ0n1EuZXodjnjqdfehfFOJ3POFw3lyvEANmGpy6kjU/wBasaO00Ma2++c+EAcoyi85pNVccPViqc8gBpvBnx7hpCZsDxI2yAHg0wWrOdA6mV3jkf3Fcl8QYkWoGbXlrrTr4f4jiUs2yAGBykB7m6EACOan5/HlQ4TZYHk2nlz/AK14rKrjAHxr1brJHcSty4BbUQT8gOn9K24LBta0zSedWcLxmw7QxGYtCgnUgaQD0rPGFbRkGp3A5dB2oepT2W7QMkHkYy64TIstaeI7SGCAD3iea8OSeVYUxIbUdOVU7OJLA9RoR3FUuI33Cxm1O1ZNcTlPkiBSM7JRHCWwbs5BA6cvalrEcOOIxr5R6A2Un8PX4mDV2zxEouaD7Tz5R761aw2IGGwt3FNuJaPxEjQfEmiaLotqVWtLST3IdjOEI2Js2sksJdmJ1CAQBAMGWyx7Tyqcbxd2xoEDCd51A/WvXg/B3Lh/n7r5rl5QFy6qiaFRHUEEH36zV3xPg7kZ2IiYMd9qmqwWBuBb8+e7NZ0n3N81s4jwZL2Es3LKWfNhWF3LDmAT6jueWkaadKpcDvf7ipiCqkGfxAmfmfzph4FwK1dw9pYIJDZiCVM6qc0b6de1LfhtIw163MlHuJPt/rTL4oJoMcOB8kjwv04kjmtXh7DAeZi2Ey5yidBl0mOvSjuFxWeRcXMrjbsaAeHsUGtXFYzlLjTnqZNFvD9suve3p/08j8jSlxftkjTThyT0Bgp31164oTxDw02VyrFhmzIDpCHTUwSYjlW5OGm2HylYIAcgFhAH1iSKLcahEksQBoT2b0kH4kVaXL/Lm2AdAPVMmGECD112HeiO12mR1y/Huk2MadvZJJ3XQvG8QFq3ZJ9LB+XNAv8AcfOg3jGw4uWsYQQCFBjlAzITzBMkGegrdjvD9w3LSAiMsMehBJYid5HPnBqx4sxKthXto0jQcmAh1hiRsZEbVfDODarSNbHvQodskToq3+3L9BUpM/ln7fOpTH/b/IouKe4LpOHsXCvqfltVXGWlCE65tI2+M1etYJgPU81oxAWK81dsHny7kvMkpevMxcKoJnXTmFGs+wozhBh3ZCEeEUlwn2mbaAR7iKXeIYoLiMjGAUJDc5Gy6byBGvOt3Dcc1t5Bg9esGY+lOKdgCRY+3V17jD16WKo/6fpIH25R4abiBbmmDB8CRr+Vb0yAQCDnAEqUYHZlIgxRrBeE0z3dc4URImZY5tegUAD4k89B/hw3ZGKznQuihyMozeqNSInWieK8UJblmtwWP+JbH2mIGkn8J015ijKTaQaHOEfhDYl+LdUNOk6bRaLGeQ0kbgTeLFK/GuFm0CSwKk+nq0c/aedL9y919vpFEuN8ebF3mbISYhETUIo5bRz7b0Ot8HxVwSLflg87h1+Q2+NBVdkOnIcdeKa0sQKVOKx+vUC8cLeZMX4QtHnKoLuwjrO9KXE8Z5zBQTlmQBsD2p0v/wAN79xZLrPIyf1FBeEeFrtu84xClCg000YnYg7FaMoPosaXA3C838Sxb8Q4Mc2GTnmeOVhOUXnIlWOD8HVibtyZ2UkTJ2nuB0E0/wDDrjJAKF7cAA5QInvlGsx215UsWB6gyQhVRIy5QSo1IEyddetNWH469u0GALIMoLqNBmHqDDWCs7kDUd4oeuZN79aJE6oajy6I3de6scb4WlvDFlUs6eqACXZZll03PtS/a8dXLXoxVlgeoEH2ZXIMba0w+GPEC3ibdwZbg1BywCJ0I70E/iNwJ3HnIueImBLqvMR95deWtC09kuDHix434fnciKdXZ+0/hecN4ot3SEtqxNwyIG86e+4OwmvWM4kYMozMPaPbr9KGeE8LgEGZ1AujX1sQRzmCYHWii+dav53w5yKx1BDgrPpkAnTblVXMpbRa0HjPsNTmeN0wo4tz7uMbkvYK9iDiVe+s2gZyjQKP17nf4bPHF8NZvWFsMZBZSVBI2M6kV6w92yX1UCOTDQ84132qvh8ZbstnAzkH0bxI2ZtNY3jnpUGoSWkDZ0kaC1+fvulG0mteS25OYFr8OXoOAVvAcJXDL/grlHMcj3NVcXxuLjW76ZVaAGEkTH3j9014wfEGzkOxbNJk9d/gI/IVdxvC1urMTptVIc1xzIz6/C0qUhTMPjgQrWE8QrhVdXdQrJKHmXEhgOs+j60m+BcZK3wx+9nJ99z9Kr+KODG3ZWNlJOu+u4HbQae9DfD+Lw6KzLfDMdCkR35mTTAu7XChm62R3iJ7kkfRczF7QymZtrn3yq3AOLZcTdT7rM0e2Y6/Kn/gPG0tNlZoET2Pb5R9K5lewjtez21JIO+w9ppu4bw/zYzOUIOojXcH47CqVwxjg8GLd89QjaJFSaT+h/SYeLY7zmOQCDHp7ab9xBM7ajaKrY7GusZBKhQTmMD0mY7GB/pRFMM6AhXzKRqRpI2kgxHyilfjnELaMVusuQwAo+1qSeXtvoKGpAvfBb4DfuixHGwV8XQpvpy10QLTl32B9+CPniKeaoWVuFJykaZc4AWdpYyBz0NLFsZku2kWIe4SFP2wSCB7CIG/LrS23Ej6/LzBCQQpaSSFZQCewJj3pj8FoScztmOsdp1Y9BTD5bsmk8rddcUiY01nhpy1VTzT+A/9tSmfOnWpXfPVP4jxKZ/Kt3oxfOomfhQ3GXMxga8qK3FESaX+L4pcOjPGp0X36nsKSM2nNDdSlRdoEt44q+NZWJ9NvKkfjEHXsAW+VXhgxknbXeDp0nt8flQOxnW4LrAsdY15nntTJgce19reHW2VZzE8uZJ6bflTOs1wa0MvAAU0q1Wm8OYSCNybPD/DfLwpVwCbozQBIhgMogjprG0mlLhvgp8Xec3Lr27CMVKwQdBEAkQR316ezw9k4a2oG8iTJ7azMCB00oqmLCL6dSdf1O3xrmv2Khm3nxtx09N6durVX05Ju43g2Ol4tHR3IVwfw7aw1vKpMbzJJ13E8vhAopbS2NN6rXr+ZQDAms379u0q5BmbnJ/MjesgYBfbmZJMnSevaNk/b5CwC2XsIc2ZdAOVAvFrJ5DebIVYaQYIg6wToDRjD8QnMS2nSNutc0/i5xQubWHV5U+plHPUBJ7aEx2qaDW1agDDnf8AapWc6mw7eghWcPmW0LiW5Bkhmb1ETAzZNxAByg8h1NGeE442lIup5ikeo20YkAgQrWxJIifbpVPwlhAV0ckrCEsxgZRLIomGH0ii7JbWRbvKuXV3MEsxMwOQA/X3rq0bRnTx87+m65hKqTSRIK8pwS0GW/hrmU/gYEqeo1hk+sdKMnFsTLAL2DZp6chQPiHHLQAIfNGmYbbQdqHXuNJAIYbUK5z3GItyvbu6yRjGNa29zqjnEcJh7qkOqkHtzGx7Gg/EMYEgJ6QogAaAAaARVDE8eHI0M89r7BVIAmC3IVfsiY3DwW9BhLtkCZ0RHh1xrrwGjmWJ2G5o1guHXb6kyVtrISZhn5xJ00Ek+1eOD4FGuPYW6tu2uozzDsDALba6/Kjd+3ifLIF5ItrmyqpEKImDlGs7g+rlrrRdKg37oJF8ov59erhg7AQCA4xczYHKLa5cBxS3xiw9ssPvgA/EgOPzFDeF+MXtkC7bK8pnT50f4o5uBbjAAsi7c8pKT8ctL/G+EwudRI5j97VVxZkcjkeGY8ipxW0WMnO4I4295XnxdbxOKVRZsk27iZw2YawdVA/EQNuYNIfD+DFxmglZiRqBPIxsddq7X4ETPg19ZLI7KRGwzZhr7EVzjx7ZW1xC4bSwPS5A/EdSR77+80ThqrmzTAjUEe/QS3ZpF+08TG9PlzhttVCL90Qem1Uxh52MH7p6Hl8KuYm9bYsU0kz+v61UtFg1Jaktc4TkT6pFSJBBaYISvxfxNiWDIFFqJUxqQRodeWtJ2Je4Wl/VMTpq0Hn313rp3E8CvmsSB6oYj33+s0peIcL5YmNG0HbrT/BbDQ3YaADfyT7G02VsN2ozgHh1OuaF4fHID6ln6imnhHGcKpGrKzGIUEjbWNOtJiWxBJ5fWnr+GHBhfxAJHpt+o/l9dqIxGHY/UyeKWUKrmWAEDgmb+as//Hc/+tv6VK6T/JjoKlY/4tn8j4BX/wAgf4+aBYzwvltlhcZ2H/CBSrxbgdwySMwI1Hbt8OldUidKRfHLYixbbyVVgQYJnT+tUxXw9jYfSELPBVA10QJOpSrgfD6OvpZlPTT5war8MsXbOLQA5hJAEddzpzA1+dEfAnFgxPmAEmFHVDmOaRzJHvRniFny38wD1LJHTUEfrSx+0z7jz4de0Z5NBRpOfIbyVvFYfzCRcGuuo568wNAIERQvG8MdVy2bhWNucfA1vwPFA0MBBBhwd/z3q01/PmYCP3771g5zTl93nlMned5Oecm5O422208kl4rhGKuS128QAdBqPou9XOC4K4toku0T+z6po5YutJgSPepfYEEggR/xD6Cap27nNt4R+loWjauFXwPlHMWuMzH/AIoj4Cue+NeDi1dNxZKPBkmYbmD26U9pAP3TOu1BvHptjBOxGsp/5rMfCa1wdcis0b4HG5Q+Nw4dTMnK/gEt8NxdtbZtk+tygVifsiCra8hBA9hXi/hUhBbuyQWBJ13nUxJO313p1wnh6zayXVUFGtKynQj1AGdDuNqpWPDdt2a7HPQe/brFGuxjab3B0iOWf4jJAUvhhLdqQfFVUtWrWGzMJPLbMx9h9ldOetVsDhrt9bhChQYPOd/bkOdNGC4CpceYDlEHXWffrV/FWrS5gAAu+n9aF+YAG1qTr16+CKpYJrTsm65Nf4FdOICkkpJBP4Y7c6c7VoW0CBYg/H3/AL1sx+HywZ35c45VW6VepiXVWidE9wGCp0WlzcyegPVX8GJZmOp6T01k6TGmpER2mjjW791Wt280EZriliT6RMsDrtoBzy0vYa7DAydI+zv32iZE86s8T401t3RXzHL5fmQQxUR0PaNzpWtJzdmDPGOut4Vq1N7j9AEgSJyERyFuY0zgqtxjiSWFIP3BBMjUyTp+Ua0d4TcS9ZVt1YaVzbiuAuX2Beck7AH50c8LcZ/l7RV5yTHsRufbaq1KX+sFtzqOBHrZJviOK2arWj7b/VqSdeW5dC8NYVbdmOXqbt6mLD4wRXMf4jW7hxTsACIGWdDHP31n5V1jhjLcwiXLZlWUEe39a5/4ytZhOvpInty2+FTTJpPbtDP36/pYFoq7cb164Dcz21Y75UEeygH8qLqtCfDtlTaENJAB+YBj9KMotLcUf9juaQIPxzEZb9tD962IPfM4/QVTxXDBiXVTmhRPpPM845iiXiKwrZCdDEfIyPbevHBr+T1hgZ0jciD85/rTGjVLcM3ZN16TDHtMM1hGnjuSnx/gQshGBzSxVljUEf2rrn8L+DeThg5ENdOfXcL90frQDG8Pt4m1ckQ0F1MfZZQeXx+RroHCWy4a3yORR9BTbC1O0icx76+BKWYtnZyALE9BEfM71KHVKYd6AlF6r4/Ci6hUidKtRVXiN/JbZhuBp7nSuIlcuQ8Z4e2Evm4sqDo0CdORjnRezxxLttS5gkAe5py4hw4YqwCyjMR+Wlce4thruDvGJKg+pO3UdDSLFYRwMA/vgfZOcNiWOEu08uPsinEQEOaSvLQwTO3uKIcGNhrUNeY3TrlLRmHtzoPjsfZu2VY5o6gbDdiZ2IANUr1tVV8pUHSGIBgGOnvOmxGmwoNlIvZ9Vs+tFOK+IMov2WyTrBgbxfknVrltWhGJHNZhden3h8xQji1zQRp2H5UJ4oRZKkObhiQzEDN6dpGoGgPuaFY7i82kiVInMSJ7CQdflzJqBhnVYcHW3RHXf3KKXxVkyWkcc0z8Ivgo2aJBJHUfOkbx3xw32FhFIVGlj+Jo0iOQk/GinDOJWXHqvwYEgkAjadgO+/WrlmzhQwyFCzHQk7neTua0pMbQrbZbJGUTE7+gmlSj8xS++Gm5yNu63n6q34N8WoMPbsXkyMiC3mI9LKoAXXkYAmadOBracQsGdtdjO/cUkNikceixlPTWPeSah4kbMPbtFHEbTBjmfUYJ+HtVHUw6ptAa5ad0gRz0VCyi2lstqacNMsjC6FjbrqpXKOh+dJ+Px5W4V76iNo96buAcWTEWg3MjUN+IbqehH10qhxjh6sf8sHXlp9ayqAGHOvpBzHNUw1UNJaR370qPdNw5j3j2GleluBRJgCqfEsetkQBqTET3gVf4NeTZrhZmgsANugB6RPIzy61oKbg3aaLJji8fSwjQ1+cWHCYzuBwzJ3ILiMazHJbUkmfiBvE77H5UwcH4CpUMzSef6iiNzB2s5eEaP8tVUZQGiQO51M1l8SEHlrlWPwrrttseqka1RzgQGtEJNU+OPe4giG6Ae5P6ROxg0RYgGl7j3CrLicg13MRVd8XfWGcn1QwWTIA3MbR1/wBatYm/nEE7jbn8udZ1GvZBHiFbC4inWJ37ijPgjH22wjJbH+WzWzrznN+TChvH0FwsRBIGo6j+tIvhDjv8nebM3+HcYK4g94uac50Pb2FN3Er7RcyKZUa9uR/LajcRTcxzRmM58/HeqUXBwcdevZUfClsm2D9PbT9KYloT4YwbCyjxEhtJ6MZHz/OjEdKXYwzUckLmw4jifVLnjxoSye7jTr6a3eGytwBhvpmnrFbvFeFDpbB2lvnC178M4HKABzIo2kJwzI1T3AOiiOE+pRlcMzutu2YzH1CPuR6vbkPjTkzbDkBAodw3BCyCd7jmWP8A+R0Aq3np/hMP2LIOaVYqv2r5GS3TUrTnqUUhkwUI8RN/hga6ty7fv6UVFCuPCRb/AOauXIjhbeVFXoAPpS3x3g9rGIxUAXFkfvtTJeaFJ6An5ChXh0ehm7x8tf1qr2B4gqzHlpkLklzAGwz230EiFgkydCVIGgjWpYW2EylpzCBAbMYiInWIIMxH6dX4vwrD3SLZAS4ZZWGhn9faud+I+GHCwG9K7EqIB0PqJPw0HKd6TYui8RtZHd/XmfwFWpdxc0IXhWsXJts5YhoIeQwPT1a8qj8ARXzKQ3VSdx0kailbFWEugszDMdY+o6Qa88Jw10N6cQyjoxn4CTvWD6JuWvjhE+n4VdkppxflLo2DIXmUXPPuBr8lrT/s9gjF1SLBgQSCuh1BIIge5iiHDcHiSA2S4wjVjAEyds3KMvxminFMMllM14pJA9HPuYmecbihQXMeL/8AybQuFN5MKn4X4Yl8kJivMO0AhTP/AFHXaid3gKiQxOnMkgfHWKWuDYm0SyL6QPsgfgPKSJJkanei2NxJyk5Q2USDkA2IEyAJ1Irq2eyC6Ryy4xEc1cPqOsCUW4Pglsv6D9vf4bHXmKteM+ICwoJaGZQ22xYf1pc4bdxDXbb5TkDAknT084HtNHPHmHtfy63Cc5Q+lCAR6tMzEgnIIn2kSJmr4WiXgtqHUa8cvC3tqGNCo6mwnn6deul+aXhLydCTudSSPtH479uWgrZgpRgwM+r2Hxnccp/LesW7TNKIockSSCNgATMAe5nb09a1sV8seklmYkHWFXU69fqdKcvA2YhKiCTc+KOJxJ3BQhYbWfs6TqJj39tNqIo6C2Ycl3XKBOm8hQN9ZGvt7Um2Lb3WzjQBgBqMwMiIBiZMEyPbnRheHhVD3HdWj0Q2ui6EH7v3RGlA1abAeutPCVWUQ4Qr34d2abatCjQt93IZMlev9qoIxK3HZiCZg8wToI+NU8aRbL+U2QMoIABOh9Leo9TPz3NCrHFtlYlYPwqDSk/Tl0fVH4Oo1jjJzt5ytWOweYdxRfBeInuWQr3HTyxGuqH3jU/HasNdS6u/q1iOdDHt+WrKdFaJJ5RqfyrQHbbsuzmyPcIO21PvhHigxFjNbBHl3XUg8syqwPsYamFbXPn+5rnH8Krri7fQf5bgNMaZlJjXkSrN/wBtdMUxSn4kwUq53QL+XllzSZ8l0lDuLWQcizBliPoKJ8GsqkEctfjtVtsBbYhnWSNgdhOu3OrCIoEAADtTj4fgnBrXPyGQ68UYMTFHswN/qfZe/wCYqeeKgrAUU6kIRY/mV61KzkHQVK5dZM6mq/EcP5iFee49/wBzW8GsNVVC1XmzWmPVT+VVeAj/AAuf2jv8v0ojAIPeh/CBlDId1bpyP+lSuVPFjNi1HIAfT1UUxgXKS6ggciB+tDWH++c9h/4kVc42f8F/h+YrlyUONeAsLilNywFBM9gevsa5pxXwHiMPclZWDpO3aDt867vwRf8AAU9ZP1NaL+OBveQyBlPP4TqKydSGiu15XGcL4mx2GIFxNBz1+Y5bf61pxnDMRjW8/MihumjCB96TrpXYOIeFbNwEL6Z5HUfLl8KU73ga9ZurdsuwgyQpJBEzB1kjsZ2FLH4M070wAd4v5THgFt2gdA/Xn+UN4H4f/l7ubPbMqPtEz0IER0H0op/6tb8y2i2sxY7xp15/l2oF/EPB3Q1q7aLJcAIOUGR07daFeF+J37ZAxAZkVs0lCTsdDBHPLqQfs0G6kare0JvqMjn3+Ss1hbYCy6M6sVIW2iyNCDMd4AApP8W3HS0tpnJ3KkyDOoiRtEiJ7zV/D+PbIvlboZLIEKQsgnuNWUDt1M7Cr/i3ADFYdbmGK3NZUqRryIzTA+PMVVlFzHh77iRu8eU3/F1o55DS0CJST4eu2fKcFnmSSEXVgA0TJiRDH4a7UMxWJy5mtE+r0wTJCzMAkCCDHLpVhT5CCCyaOpVgd9m0USpjSexk61Re8xkGCQICtoFOYjUnc6ExrzppFyRdL3iIHXBVsI5ZjpIDKTy1AggajWBE60WxjXbjCIYCFU84GpIBE7/s1q4fiha1Zc0CIjedQRtGpGuuq/GmFMdntAFWLMTkHQRGXQE8pOmmk6VjXeWkWWcSgBwcXmBDEsCIBMg6aAdNdKWcVb1ZdNCZJPwg96dOHWWBuMM2Uqo31Vo1MmeUagCRQbA+Dr9zKoGnLp7zz961ouAkuOULSkC4wEr4W46P/hnX23rpHBeF3sbbyeR6tsx0XvJ3+lMXh3+HFm0A+IYE/h2H9TTxaxiW1CWUAA5xH0og0hWMuEcUUyo6kIaZ9FQ8O+ErOEshXMmNT36jvWtcGZ3kcv3yq47ljLEk1BXV8DQrx2gyyuR6G/esJWSZ1/KvBr3FYy0U1oaABouXmsqayRSrx3xUFlMPDNzf7o9vxHvt71D3hokq7KbnmGhNkmpXMP8A1bFf/Lc+v9KlZfMf+p8Fv8qf5Dz/AAu6NXma1s+9ZVq2Qa9g1giGzDnoe/Q1iakVy5DuJLlv2n6mPrH5N9O1WeMJNl/aeXIzz9q942xnSBuNR71sYZ7ZHNlI+MR+dSuVbgTf4KjpI+s/rVR1/wB8H7+5t9ZrPhowjL0b89/qK18WbJiLTnYwP0P0Ncp1RpkrGUjY1smpXKFUxFpWHrthh7D9aH3OF4c8in5fXSjla3tAiqloOakEjJLGJ8IYe5/8be6j/wDJFa8B4MSwS1qEneGaD7gyDTN/Kr0r1/LL0+tZfL0/4q/av3pbx3hdbinMise36UkcZ8H+WoNkZGT1AGdT3nWZ511hsEh6/wDcf60teK8AttQ6uUBMNmZiI3796FqfDwL0Ts8M2+CjaDrOXFFuFLqgiACrBCOa6y3TuDpp0oj/ADF69cW2sBtZ6az62I301HvTPet2mMhrbtygGTGwmP1q0toW1LFYAEwq6xEwI59q3OFBdtFZ7C0YHgiKAGuM4kFlACgkbCZmB8KPW7wn0qFGwjttQnwuLuILXHGVAYVQNSepJ1j5Ve4ujs64ax6WOruB9kdPeNfiOtbNosbkFcWyV4MSZnX3qygboasWMHaw6DSPqzQJPcmqBxN6+YtSq/vdvbkK0XKxcxSpo7BT0O9WbQLCQCR7f1rPD+CW7fqaHfeTtPb+te8dxm1a+22vJRuf33rlCz5LdDVXiGNt2VLXWyj6nsBzNLfFvGzmVtgKOUGSe5PIdhSlfuPdeXbM3fYDv0FYVKwB2W3KJpYYuG0+wRni/HbuKby7YKoxgIurN7xv7be+9bEwdrCa3Qt3Ebi1Mpb6Fz95u3+tDcJiDb/yiQTobnMjov4R3o94d8NNeIZwQm/c/vrQoc57vpud+g5dQNEcWtYz6vpbu1PPqd5VP/abFfjX/wCv+9Sn7/ZWz+AVK17Cr/yHxKH+aw//ABjwCM16WpUotL1DXsVKlcuWVqWufv8AoKlSpXINwH/Nv+4/Nqz4i+1a9z+lSpUjNTqjAr1UqVVQpWalSpXKVlalSuXLBpR/iX/7Rv8AmWpUqpUpN8Gf5p9x/wCIrqybCpUq6gqhi/tUO4X/AO4vfD9KlSuU6Knx3/PP/L+tE/D/AP7dPjWalQpKtGuaYvZ/+c/mazUrguCA/eNZt/Yb/m/pUqUpb9jv+pTyp97f+wVvCfaHuK69wL7A9hUqUVg/sQXxH7gidSpUoxLl/9k="
              alt="img"
              className="rounded-2xl mx-80 mt-10"
            />
          </div>
        </div>

        <br></br>
        <p className="font-Handlee text-xl  px-10 font-semibold">
          Instructions:
        </p>
        <p className="font-Handlee text-xl  px-10 ">
          Heat olive oil in a large skillet or wok over medium-high heat. Add
          minced garlic and stir-fry for about 30 seconds until fragrant. Add
          sliced chicken breasts to the skillet and cook until they're no longer
          pink, about 5-7 minutes. Once the chicken is cooked through, add the
          mixed vegetables to the skillet. Stir-fry for another 5-7 minutes
          until the vegetables are tender but still crisp. Pour soy sauce (and
          sesame oil if using) over the chicken and vegetables. Stir well to
          combine and let it cook for another 1-2 minutes. Season with salt and
          pepper to taste. Serve the stir-fry hot over cooked rice or noodles if
          desired.
        </p>
        <br></br>
        <p className="font-Handlee text-xl  px-10 ">
          <p className="font-semibold">Nutrition Facts:</p>
          Calories: Approximately 250-300 kcal <br></br>Protein: Around 25-30
          grams<br></br>
          Carbohydrates: Roughly 10-15 grams<br></br> Fat: About 10-15 grams{" "}
          <br></br>Fiber: Around 3-5 grams<br></br> Sodium: Approximately
          600-800 mg (depending on soy sauce usage)<br></br> These values are
          approximate and can vary based on factors such as the specific
          ingredients used and portion sizes. Adjustments may be needed based on
          individual dietary needs and preferences.
        </p>
        <br></br>
        <Link to={"/recipes"}>
          <p className="underline font-Handlee text-xl  px-10">Go Back</p>
        </Link>
      </div>
    </div>
  );
};

export default RecipeTwoPage;