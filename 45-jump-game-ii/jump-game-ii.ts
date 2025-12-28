function jump(nums: number[]): number {
  if(nums.length <= 1) return 0; 

  let reach = 0; 
  let next = 0;
  let step = 0;

  for(let i = 0; i < nums.length; i++ ){
    next = Math.max(next, i + nums[i])
    console.log(reach, 'reach')

    if(reach === i){
        reach = next; 
        step++
    }
    if(reach >= nums.length - 1) break
  }

  return step
}