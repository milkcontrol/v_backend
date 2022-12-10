```plantuml
note as N1
  All table has
    - updated_at : datetime
    - created_at : datetime
end note

note as N2
  Danh sách các rule chính:
    1: Supper Admin.
    2: Admin.
    4: User.
    8: P-done.
    16: P-done-j.
    32: P-done-af. (AF - tiếp thị liên kết)
    64: LR-Suppliers. (LR - đại diện pháp lý)
    128: PM-Suppliers. (PM - quản lý)
    256: Partners.

  Công thức tính quyền cho mỗi api:
    Cần cấp quyền cho: P-done-j,
    P-done, P-done-af cho api POST `/live/:id`:
    Quyền = 32 + 16 + 8 = 52

  kết qủa sẽ là:
  router.post('/live/:id',
       permissions(52),
       LiveController.create())
endnote

entity "users" as users {
  #uuid : string <<pk>>
  --
  *username : string
  *password : string
  +profile_uid : string 
  streamkey : string
  *rule : int
  *verified : tinyint
  *blocked : tinyint <<default:0>>
  *is_delete : tinyint <<default:0>>
}

note right of users
  rules :
    - 1: Supper Admin.
    - 2: Admin.
    - 4: User.
    - 8: P-done.
    - 16: P-done-j.
    - 32: P-done-af. (AF - tiếp thị liên kết)
    - 64: LR-Suppliers. (LR - đại diện pháp lý)
    - 128: PM-Suppliers. (PM - quản lý)
    - 256: Partners.
endnote

entity "user_profiles" as user_profiles {
  #id : int <<pk>> <<generated>>
  --
  +user_id: string <<notnull>>
  +profile_id : string <<notnull>>
  *blocked : tinyint <<default:0>>
  *is_friend : tinyint <<default:0>>
}

note right of user_profiles
  is_friend: là thể hiện giữa user và profile
    là mối quan hệ bạn bè. trường hợp is_friend
    là false nghĩa là user đang muốn kết bạn cùng
    profile nhưng profile chưa đồng ý (Trường hợp
    này là user đang follow profile).
  blocked: là thể hiện việc user muốn chặn profile
    trường hợp này is_friend sẽ được chuyển về
    false
endnote

entity "tokens" as tokens {
  #uuid : string <<pk>>
  --
  +user_id : string
  *revoked : tinyint <<default:0>>
}

entity "log_tokens" as log_tokens {
  #id : int <<pk>>
  --
  +token_id : string
  user_agent : string
  ip_address : string
  ip_address_v6 : string
}

entity "profiles" as profiles {
  #uuid : string <<pk>>
  --
  public_id : varchar(128)
  display_name : varchar(128)
  *first_name : varchar(128)           
  *last_name : varchar(128)
  gender_type : tinyint <<default:3>>
  about : text
  identity_number : string
  identity_image_one : string
  identity_image_two : string
  phone_number : string
  email : string
  birthday : date
  *search : tinyint <<default:1>>
  ship_address_id : bigint(20)
  bill_address_id : bigint(20)
  *language : string
  avatar : string
  favourite_count : int(25) <<default:0>>
  follow_count : int(25) <<default:0>>
  friend_count : int(25) <<default:0>>
  postal_code : string
}

note right of profiles
  public_id: là id dùng để tìm kiếm người dùng

  search : có cho phép hệ thống đưa lên công cụ tìm
    kiếm hay không

  Cột `ship_address_id` và `bill_address_id` cho
    biết đâu là địa chỉ mặc định cho người dùng này
endnote

entity "countries" {
    #id : bigint(20) <<generated>>
    --
    iso_name : varchar(255)
    *iso : varchar(255)
    *iso3 : varchar(255)
    name : varchar(255)
    numcode : int(11)
    states_required : tinyint(1) <<default:'0'>>
    zipcode_required : tinyint(1) <<default:'1'>>
}

entity "states" {
    #id : bigint(20) <<generated>>
    --
    name : varchar(255)
    abbr : varchar(255)
    +country_id : bigint(20)
}

entity "cities" {
    #id : bigint(20) <<generated>>
    --
    name : varchar(255)
    abbr : varchar(255)
    +country_id : bigint(20)
    +state_id : bigint(20)
}

note left of states
  states : Tên tiểu bang hoặc tên tỉnh
endnote

entity "addresses" {
    #id : bigint(20) <<generated>>
    --
    firstname : varchar(255)
    lastname : varchar(255)
    address1 : varchar(255)
    address2 : varchar(255)
    zipcode : varchar(255)
    phone : varchar(255)
    state_name : varchar(255)
    alternative_phone : varchar(255)
    company : varchar(255)
    +city_id : varchar(255)
    +state_id : bigint(20)
    +country_id : bigint(20)
    +user_id : string
    deleted_at : datetime
    label : varchar(255)
    public_metadata : json
    private_metadata : json
}

users ||--o| profiles
users ||-d-o{ user_profiles
tokens }o-d-|| users

profiles ||-d-o{ addresses
profiles ||-d-o{ user_profiles

countries ||-d-o{ addresses
countries ||-d-o{ states
countries ||-d-o{ cities

cities ||-d-o{ addresses
states ||-d-o{ addresses
states ||-d-o{ cities

log_tokens }o-d-|| tokens

```