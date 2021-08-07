module ComicsApi
  module V1
    module Adapters
      module Marvel
        class ComicsResponseAdapter

          attr_reader(:response)

          def self.create(response)
            new(response).create
          end

          def initialize(response)
            @response = response
          end

          def create
            ComicsApi::V1::Models::ComicsResponse.new(body: create_comics_data)
          end

          private

          def create_comics_data
            ComicsApi::V1::Models::ComicsData.new(data: create_comics_list)
          end

          def create_comics_list
            ComicsApi::V1::Models::ComicsList.new(items: create_comics_items)
          end

          def create_comics_items
            results.map do |item|
              ComicsApi::V1::Models::ComicsItem.new(id: item[:id], title: item[:title])
            end
          end

          def results
            return [] if empty?

            response_body[:data][:results]
          end

          def empty?
            response_body.nil? || response_body[:data].nil? || response_body[:data][:results].nil?
          end

          def response_body
            return if @response.body.nil?

            @response.body.with_indifferent_access
          end
        end
      end
    end
  end
end