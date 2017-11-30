json.partial! 'api/songs/song', song:@song

json.comments @song.comments.each do |comment|
    # json.set! comment.id do
      json.partial! 'comment', comment: comment
    # end
end