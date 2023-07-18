pub contract StepsListing{
    pub var StepList: [String]

    pub fun addToArray(step: String){
    self.StepList.append(step)
}
  pub fun updateArray(_step: [String]){
  self.StepList=_step
}
  pub fun showArray(): [String]{
    return self.StepList
  }
  


    init(){
        self.StepList=[]
    }
}