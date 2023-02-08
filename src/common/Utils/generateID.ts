export const GenerateId = () => {
   const id =
      (Math.random().toString(36) + '00000000000000000').slice(2, 7) +
      (Math.random().toString(36) + '00000000000000000').slice(2, 7)

   return id
}
