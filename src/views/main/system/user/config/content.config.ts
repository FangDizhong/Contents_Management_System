const pageName = "User"

export const contentTableConfig = {
  pageName: `${pageName}`,
  pageUrlName: `${pageName}s`,
  tableTitle: `${pageName} List`,
  tableHandlerBtn: `New ${pageName}`,
  isSelectColumnShown: true,
  isIndexColumnShown: true,
  propList: [
    {
      prop: "name",
      label: `${pageName} Name`,
      minWidth: "100",
      slotName: `${pageName.toLowerCase()}Name`
    },
    {
      prop: "realname",
      label: "Real Name",
      minWidth: "100",
      slotName: "realName"
    },
    {
      prop: "cellphone",
      label: "Phone Number",
      minWidth: "150",
      slotName: "phoneNumber"
    },
    { prop: "enable", label: "Status", minWidth: "100", slotName: "status" },
    {
      prop: "createAt",
      label: "Created At",
      minWidth: "200",
      slotName: "createdAt"
    },
    {
      prop: "updateAt",
      label: "Updated At",
      minWidth: "200",
      slotName: "updatedAt"
    },
    {
      // prop: 对应的是table内部数据的属性名
      label: "Actions",
      minWidth: "150",
      slotName: "actions"
    }
  ]
}
