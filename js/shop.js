$(document).ready(function(){
    $.ajax({
        url:  "//api.tumblr.com/v2/blog/trandofi.tumblr.com/posts/text?api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4",
        dataType: 'jsonp',
        success: function(results){
            console.log(results);
            results.response.posts.forEach(function(post){
                post_html = '<div class="span4"><h3>' + post.title + '</h3>' + post.body + '</div>';
                $("#varaosakauppa_content").append(post_html);
            });
        }
    });
})