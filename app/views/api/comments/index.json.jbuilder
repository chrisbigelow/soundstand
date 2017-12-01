json.array! @comments do |comment|
  json.extract! comment, :id, :body, :username
end